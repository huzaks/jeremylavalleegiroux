import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
    return (
      <header className="fixed top-0 flex w-full bg-white justify-between z-10 py-4 px-2 items-center 880px:px-12 880px:py-[10px] shadow-2xl">
        <Link href={'/'} className="text-xl font-bold hover:text-primary transition-all">JEREMY LAVALLEE-GIROUX</Link>
        <Navigation />
      </header>
    )
  }