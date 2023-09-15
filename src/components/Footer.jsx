import Link from 'next/link';
import {
    FaGithub,
    FaLinkedin,
  } from "react-icons/fa6";
  import { FiMail } from "react-icons/fi";

export default function Footer(){

 return (
  <><footer className='flex flex-col w-full p-16  bg-black gap-4 md:gap-0 md:justify-between md:flex-row'>
  <div style={{
    display: "flex",
    alignItems:"center",
    fontSize: 20 + "px",
    color: "#fff"
  }}>Copyright Jérémy Lavallée-Giroux © 2023. All rights reserved.</div>
  
    <nav className="flex-row gap-4  p-1 items-center rounded-r-md flex">
          <Link
            href={"https://linkedin.com/in/jérémy-lavallée-giroux-159b40201"}
            className="hover:text-primary rounded-md transition-all text-white"
          >
            <FaLinkedin className="h-8 w-8" />
          </Link>
          <Link
            href={"https://github.com/huzaks"}
            className="hover:text-primary eounded-md transition-all text-white"
          >
            <FaGithub className="h-8 w-8" />
          </Link>
          <Link
            href={"mailto:jeremylavalleegiroux@gmail.com"}
            className="hover:text-primary rounded-md transition-all text-white"
          >
            <FiMail className="h-8 w-8" />
          </Link>
        </nav>
  
</footer></>
 )
}