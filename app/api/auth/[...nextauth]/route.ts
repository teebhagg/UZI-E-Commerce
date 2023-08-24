import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt'
import CredentialProvider from "next-auth/providers/credentials";
import { UserInterface } from "@/app/utils/interfaces/user_interface";

import { connectToDB } from "@/app/utils/database/database";
import User from "@/app/utils/database/user_schema";
import { AdapterUser } from "next-auth/adapters";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const handler = NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  session: {
    strategy: "jwt",
    maxAge: 60 * 60
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {
        fullName:{label:'Full Name', type:'text'},
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const url = process.env.NEXTAUTH_URL!;
        if(credentials) {
          const { fullName, email, password } = credentials;
          console.log(fullName, email, password)
          await connectToDB();
          const existingUser = await User.findOne({ email }).exec();
          //Check if firstName is undefined
          if (fullName === undefined) {
            // Login
            if (existingUser === null) throw new Error("Email does not exist")
            const isPasswordCorrect = await bcrypt.compare(
              password,
              existingUser.password
            )
            if (!isPasswordCorrect) {
              throw new Error ("Incorrect Password")
            }
            // console.log(existingUser.fullName)
            var user = {id: existingUser._id, name: existingUser.fullName, email, image: existingUser.image ?? ""};
            return user
          } else {
            // Sign up
            if (existingUser) throw new Error("Email already exist");

            const newUser = await User.create({ fullName, email, password, wishList:[], cart:[] });
            var user = {id: newUser._id, name: newUser.fullName, email, image: newUser.image ?? ""};
            return user;
          }
        } else {
          throw new Error("Invalid Fields Entered")
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const isSignIn: boolean = user?.email ? true: false;
      if (isSignIn) {
        token.user = user;
      }
      return token;
    },
    async session ({ session, token, user }) {
      if (token?._id) session.user!.email = token.email;
      return session;
    },
    async signIn ({ user, account, profile, credentials }) {
      if (user) {
        const {id, email, image, name} = user;
        console.log( user.name )
        // check is user exist in mongodb
        const url = process.env.NEXTAUTH_URL!;
        const data = {fullName: name!, email: email!, image: image!, wishList:[], cart:[] }
        await connectToDB();
        const existingUser = await User.findOne({ email }).exec();
        if (existingUser === null) {
          // Create New User
          try {
            const newUser = await User.create(data);
            user = newUser
          } catch (error) {
            console.log(error)
          }
        }
      }
      if (profile) {
        console.log(profile.name)
      }
        
      return true
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export {handler as POST, handler as GET} ;
