"use client"

import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useState } from "react";

interface AuthUser {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export default function ProfilePage() {
  // User State
  const [user, setUser] = useState<AuthUser | undefined>();

  const handleSession = async() => {
    const session = await getSession();
    setUser(session?.user);
    }
    handleSession();
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  const fadedDivider = (
    <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
  );

  const defaultDivider = (
    <hr className="my-5 h-0.5 border-t-0 bg-slate-400 opacity-100 dark:opacity-50" />
  );

  return (
    <main className="container max-w-screen-xxl mx-auto mb-4 px-4 ">
      <div className="flex-grow mx-auto max-w-xl">
        <div className="mx-auto mb-5">
          <div className="py-4">
            <img
              src={user?.image ?? "https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
              className="w-60 rounded-full shadow-lg mx-auto"
              alt=""
            />
          </div>
          <p className="mx-auto text-center text-4xl font-bold ">{user?.name ?? "User Name" }</p>
        </div>
        {fadedDivider}
        <div className="">
          <div className="flex justify-between">
            <p className="">History</p>
            {arrow}
          </div>
          {defaultDivider}
          <div className="flex justify-between">
            <p className="">WishList</p>
            {arrow}
          </div>
          {defaultDivider}
          <div className="flex justify-between">
            <p className="">Language</p>
            <p>Eng</p>
          </div>
          {defaultDivider}
        </div>
      </div>
    </main>
  );
}
