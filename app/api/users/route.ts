import { connectToDB } from "@/app/utils/database/database";
import User from "@/app/utils/database/user_schema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

// Create User
export const POST = async (req: NextRequest) => {
  await connectToDB();
  const { fullName, email, password, image } = await req.json();
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser === null) {
      console.log(fullName, email, password, image);
      if(fullName === undefined && email === undefined) {
        throw new Error ("Server Error")
      }
      let newUser;
      if (password && image) {
        newUser = await User.create({ fullName, email, password, image });
      } else if (image) {
        newUser = await User.create({ fullName, email, image });
      } else if (password) {
        newUser = await User.create({ fullName, email, password });
      }
      console.log(newUser);
      return new NextResponse(JSON.stringify({ newUser }));
    } else {
        if (image) {
            // Update user image
            await User.updateOne(
                { email },
                { $set: { image } },
                { new: true }
            );
        } else if (password) {
          // Check is user password is correct
          const isPasswordCorrect = await bcrypt.compare(
              password,
              existingUser.password
            );
            console.log("Incorrect Password")
            if (!isPasswordCorrect) {
              return new NextResponse(
                JSON.stringify({
                  message: "Incorrect password",
                }), {status: 404}
              );
            }
            
            // Update user password
            await User.updateOne(
                { email },
                { $set: { password } },
                { new: true }
            );
        }
        return new NextResponse(JSON.stringify({ existingUser }));
    }
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ error }), {status: 404});
  }
};

// Get Users
export const GET = async () => {
  await connectToDB();
  try {
    const users = await User.find().exec();
    return new NextResponse(JSON.stringify({ users }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }));
  }
};

