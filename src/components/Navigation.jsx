'use client'

import Link from "next/link";
import {HiMenu} from 'react-icons/hi';
import {FaXmark} from 'react-icons/fa6'
import { useState } from "react";

export default function Navigation() {

    const [isOpen, setOpen] = useState(false);
   
    return (
        <nav className="text-sm items-center font-bold relative">
            <div className="hidden items-center font-bold text-sm md:flex">
            <Link href={'/'} className="p-6 hover:text-primary transition-all">HOME</Link>
            <Link href={'/#about'} className="p-6 hover:text-primary transition-all">ABOUT</Link>
            <Link href={'/#projects'} className="p-6 hover:text-primary transition-all">PROJECTS</Link>
            <Link href={'/#contact'} className="p-6 hover:text-primary transition-all">CONTACT</Link>
            </div>
            <div className=" block md:hidden p-4 z-20" onClick={() => setOpen(!isOpen)}>
                {isOpen ? (<FaXmark className=" h-8 w-8 hover:text-primary transition-all"/>) : <HiMenu className=" h-8 w-8 hover:text-primary transition-all"/>}
            </div>
            <div className={`${isOpen ? 'animate-menu flex text-center fixed bg-white items-center m-0 p-0 top-0 h-[100vh] w-full z-10 left-0 flex-col justify-center': ' hidden'} md:hidden`}>
            {isOpen ? (<FaXmark onClick={() => setOpen(false)} className="fixed top-8 right-6 h-8 w-8 hover:text-primary transition-all"/>) : null}
            <Link href={'/'} className="p-6 hover:text-primary transition-all " onClick={() => setOpen(false)}>HOME</Link>
            <Link href={'/#about'} className="p-6 hover:text-primary transition-all" onClick={() => setOpen(false)}>ABOUT</Link>
            <Link href={'/#projects'} className="p-6 hover:text-primary transition-all" onClick={() => setOpen(false)}>PROJECTS</Link>
            <Link href={'/#contact'} className="p-6 hover:text-primary transition-all" onClick={() => setOpen(false)}>CONTACT</Link>
            </div>
            
        </nav>
    )
}