"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const changeHeaderSizeScroll = () => {
      const scrollValue = document.documentElement.scrollTop;

      if (scrollValue > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeHeaderSizeScroll);
  });
  return (
    <header
      className={`fixed top-0 flex w-full bg-white justify-between z-10 items-center duration-500 ${
        scroll
          ? "py-0 px-1 880px:px-10 880px:py-[10px] transition-all"
          : "py-4 px-2 880px:px-10 880px:py-[24px] transition-all"
      } shadow-2xl`}
    >
      <Link
        href={"/"}
        className="text-xl font-bold hover:text-primary transition-all duration-300 uppercase"
      >
        Jérémy Lavallée-Giroux
      </Link>
      <Navigation />
    </header>
  );
}
