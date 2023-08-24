"use client";

import { signIn } from "next-auth/react";
import React, { FormEvent, FormEventHandler, useState } from "react";
import { toast } from "react-toastify";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async (provider: string) => {
    if (provider === "credentials") {
      const login = await signIn(provider, { redirect: false, password, email, fullName }, {});
      if (login?.error) {
        console.log(login.error);
        toast.error(login.error);
      } else {
        toast.success("Login Successful");
      }
    } else {
      signIn(provider, { callbackUrl: "http://localhost:3000/" });
    }
  };
  const credentialVerification: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (password !== confirmPassword)
      return toast.error("Passwords do not match");
    if (password.length < 6)
      return toast.error("Password should contain at least 6 characters");
    // Create user with mongoose

    const apiUrl = process.env.NEXTAUTH_URL!;
    try {
      // let res = await fetch(`${apiUrl}/api/users`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     email: email,
      //     password: password,
      //     fullName: fullName,
      //   }),
      // });
      // let data = await res.json();
      // console.log(data);
      handleSignin("credentials");
    } catch (error) {
      toast.error(`${error}`)
    }
  };
  return (
    <div>
      <form
        onSubmit={credentialVerification}
        className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 ">
          <label
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            id="FirstName"
            name="first_name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mt-1 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            id="Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="Password"
            className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            id="Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="PasswordConfirmation"
            className="block text-sm font-medium text-gray-700">
            Password Confirmation
          </label>

          <input
            type="password"
            id="PasswordConfirmation"
            name="password_confirmation"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-1 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />
        </div>

        <div className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
            />

            <span className="text-sm text-gray-700">
              I want to receive emails about events, product updates and company
              announcements.
            </span>
          </label>
        </div>

        <div className="col-span-6">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our
            <a href="#" className="text-gray-700 underline">
              terms and conditions
            </a>
            and
            <a href="#" className="text-gray-700 underline">
              privacy policy
            </a>
            .
          </p>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
            {loading ? (
              <div className="custom-loader mx-5 my-2"></div>
            ) : (
              "Create an account"
            )}
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <a href="#" className="text-gray-700 underline">
              Log in
            </a>
            .
          </p>
        </div>
      </form>
      <div>
        <div className="relative my-5 flex items-center justify-center">
          <span className="absolute inset-x-0 h-px bg-gray-300"></span>
          <span className="relative bg-white px-4 text-sm text-gray-400">
            Sign up with social
          </span>
        </div>

        <button
          type="submit"
          onClick={() => handleSignin("google")}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
          <svg
            className="h-5 w-5 shrink-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
              fill="#4285F4"
            />
            <path
              d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
              fill="#34A853"
            />
            <path
              d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
              fill="#FBBC05"
            />
            <path
              d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
}
