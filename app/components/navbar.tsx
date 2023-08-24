"use client";

import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import { getSession, signOut, useSession } from "next-auth/react";
import { DefaultUser, Session } from "next-auth";
import SearchBar from "./search_bar";

interface AuthUser {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export default function NavBar() {
  // drawer states
  const [drawerOpen, setDrawerOpen] = useState(false);
  // dropdown menu states
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // user state
  const [user, setUser] = useState<AuthUser | undefined>();

  // Use Session
  const { data: session } = useSession();

  const sessionData = async() => {
    const session = await getSession();
    if (session) {
      // console.log(session)
    }
    setUser(session?.user)
  }
  // handle sign out
  const handleSignOut = async() => {
    document.cookie.split(';').forEach(function (cookie) {
      const name = cookie.split('=')[0];
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
    });
    localStorage.clear()
    await signOut();
  };

  const router = useRouter();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const dropDownMenu = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <p className="font-bold text-indigo-600 text-3xl">uzi</p>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/about-us">
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/categories">
                    Categories
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/promotions">
                    Promotions
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/services">
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">

            <SearchBar/>
            
            {!session ? (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/auth/login">
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 hover:bg-gray-200 px-5 py-2.5 text-sm font-medium text-indigo-600"
                    href="/auth/signup">
                    Register
                  </Link>
                </div>
              </div>
            ) : (
              <div className="ml-4 flex gap-2 items-center md:ml-6">
                
                <button
                  onClick={() => {
                    router.push("/cart");
                  }}
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-white">
                  <span className="sr-only">View cart</span>
                  <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* <!-- Profile dropdown --> */}
                <div className="relative ml-3">
                  {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "
                  transform opacity-0 scale-95"
              --> */}
                  <Menu>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none ring-2 ring-gray-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={session.user!.image!}
                        alt=""
                      />
                    </Menu.Button>
                    <Transition
                      // show={dropdownOpen}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <Link
                            href={`/user/${session.user!.email}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                            Your Profile
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            href={"#"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                            Settings
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <a
                          onClick={handleSignOut}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                            Log out
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            )}

            <div className="block md:hidden">
              <button
                onClick={toggleDrawer}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className={`${drawerOpen ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className={`${drawerOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={`${
          drawerOpen ? "block" : "hidden"
        } md:hidden shadow-xl  rounded-b-md bg-indigo-500`}
        id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          {/* <Link
            href="#"
            className="bg-indigo-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page">
            Dashboard
          </Link> */}
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."
            />
          </div>
          <Link
            href="/about-us"
            className="text-gray-100 hover:bg-indigo-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            About
          </Link>
          <Link
            href="/categories"
            className="text-gray-100 hover:bg-indigo-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Categories
          </Link>
          <Link
            href="/promotions"
            className="text-gray-100 hover:bg-indigo-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Promotion
          </Link>
          <Link
            href="/services"
            className="text-gray-100 hover:bg-indigo-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
}
