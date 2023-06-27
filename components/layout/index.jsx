import React from "react";
import NavBar from "../navbar";
import Footer from "../footer";

function Layout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
      <section className="px-[1rem] lg:px-[7.5rem]">
        <div className="border-t"></div>
        <p className="py-[1.5rem] text-center text-[#A4A4A4]">
          Copyright © 2023 Ruhul Amin
        </p>
      </section>
    </main>
  );
}

export default Layout;
