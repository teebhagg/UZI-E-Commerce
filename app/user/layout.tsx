import React from "react";
import MyFooter from "../components/footer";
import NavBar from "../components/navbar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full flex flex-col">
      <NavBar />
      {children}
      <MyFooter />
    </section>
  );
}
