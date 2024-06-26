"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { BsGit, BsFiletypeSql } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import "../styles/main.css";
import bread from "@/public/project-1/breadit-reddit-clone-alpha.vercel.app_.png";
import dworkout from "@/public/project-2/d-workout.vercel.app_.png";
import mangashop from "@/public/project-3/mangashop-nu.vercel.app.png"
import isc from '@/public/work-projects/www.canada.ca_en_indigenous-services-canada.html.png';
import minissentials from '@/public/project-4/minissentials.vercel.app.png'
import Project from "@/components/Project";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section className="relative bg-gray h-[100vh] w-full bg-cover">
        <nav className="absolute left-0 hidden flex-col top-[30%] gap-4 bg-white p-1 items-center rounded-r-md md:flex">
          <Link
            href={"https://linkedin.com/in/jérémy-lavallée-giroux-159b40201"}
            className="p-2 hover:bg-primary rounded-md transition-all hover:text-white"
          >
            <FaLinkedin className="h-8 w-8" />
          </Link>
          <Link
            href={"https://github.com/huzaks"}
            className="hover:bg-primary p-2 rounded-md transition-all hover:text-white"
          >
            <FaGithub className="h-8 w-8" />
          </Link>
          <Link
            href={"/#contact"}
            className="p-2 hover:bg-primary rounded-md transition-all hover:text-white"
          >
            <FiMail className="h-8 w-8" />
          </Link>
        </nav>
        <div className="flex flex-col gap-8 absolute top-[30%] right-[50%] translate-x-[50%] items-center">
          <h1 className="text-5xl font-[900] tracking-wide uppercase text-center leading-[1.2] ">
            Hey! I&apos;m Jérémy
          </h1>
          <p className="text-black/80 font-semibold text-center">
            A Frontend oriented Web Developer that loves building beautiful,
            intuitive and engaging Web Applications that leads to the success of
            the final product.
          </p>
          <Link
            href={"/#projects"}
            className="mt-4 py-4 px-20 bg-primary text-white w-fit rounded-md font-bold hover:-translate-y-1 transition-all"
          >
            PROJECTS
          </Link>
          
        </div>
        <Link
          href={"/#about"}
          className="absolute bottom-4 right-[50%] translate-x-[50%] flex items-center justify-center bg-white rounded-full shadow-md p-3 animate-bouncy"
        >
          <AiOutlineDown className="h-8 w-8 text-primary" />
        </Link>
      </section>
      <section
        id="about"
        className="flex flex-col items-center relative p-4  w-full py-32 bg-white"
      >
        <div className="flex flex-col items-center max-w-2xl gap-4">
          <h1 className="flex flex-col items-center gap-4 uppercase font-bold text-3xl tracking-widest after:content-[''] after:w-12 after:bg-primary after:rounded-md after:px-1 after:py-[2px]">
            About Me
          </h1>
          <div className="text-center">
            Here you will find more information about me, my area of expertise,
            and my current skills related to programming and technology
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 p-4 pt-[120px] md:grid-cols-2">
          <div className="flex flex-col max-w-lg gap-4">
            <h2 className="text-2xl font-bold">Learn about me!</h2>
            <p>
              I recently acquired my College Diploma in Computer Programming
              from <strong>La Cité</strong>.
            </p>
            <p>
              As a web developer, I enjoy combining my technical knowledge with
              my keen eye for design to create fantastic products. My goal is to
              efficiently build and improve my skills by crafting dynamic,
              engaging, and easy-to-use web applications Check out my work in
              the <Link href={"#projects"}><strong>Projects</strong></Link> section.
            </p>
            <p>
              I&apos;m open to <strong>Job</strong> opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don&apos;t hesitate to{" "}
              <strong>contact</strong> me.
            </p>
            <Link href={"/#contact"} className="button-med">
              CONTACT
            </Link>
          </div>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col max-w-lg gap-4"
          >
            <h2 className="text-2xl font-bold">My Skills</h2>
            <div className="flex flex-wrap gap-4">

              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <FaHtml5 className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />HTML
              </div>
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <FaCss3Alt className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />CSS
              </div>
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md  transition-all">
                <IoLogoJavascript className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />JavaScript
              </div>
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md  transition-all">
                <FaReact className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />React
              </div>
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <SiTailwindcss className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />Tailwind
              </div>
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <SiNextdotjs className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />Next.js
              </div>
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <BsFiletypeSql className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />SQL
              </div>
              {/* <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <BsGit className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />Git
              </div> */}
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <FaGithub className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />GitHub
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="flex flex-col items-center relative w-full py-32"
      >
        <div className="flex flex-col items-center max-w-2xl gap-4">
          <h1 className="flex flex-col items-center gap-4 uppercase font-bold text-3xl tracking-widest after:content-[''] after:w-12 after:bg-primary after:rounded-md after:px-1 after:py-[2px]">
            Projects
          </h1>
          <div className="text-center">
            Here you will find my work and personal projects with their complete analysis
          </div>
        </div>
        <div className="flex flex-col gap-12 p-4 pt-24">
        <Project name={"ISC/CIRNAC"} image={isc} description={"Here you will find some of my favourite projects that I have completed while working at Indigenous Services Canada as a Web Developer."} link={"/work-projects"}/>
          <Project
            name={"Breadit"}
            image={bread}
            description={
              "Breadit is a fullstack Reddit clone built from a YouTube tutorial and improved by me. Reddit is a network of communities where people discuss whatever they like."
            }
            link={'/project-1'}
          />
          <Project name={"D Workout"} image={dworkout} description={"D Workout is a fullstack web application meant to fulfill one purpose : help people better themselves. They can book workouts with the fitness instructors that matches their needs."} link={'/project-2'} />

            
          {/* <Project name={"Mangashop"} image={mangashop} description={"Mangashop is a fullstack online manga shop web application. The user can manage his cart, his wishlist and explore the 100+ mangas. "} link={'/project-3'} note={"Note: this is my first fullstack web application ever."}/> */}

          <Project name={"Minissentials"} image={minissentials} description={"Minissentials is a frontend oriented web applications where all your living essentials can be found! The products are categorized and each offer an individual product page."} link={'/project-4'}/>

        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col items-center relative w-full p-4 py-32  bg-gray bg-cover"
      >
        <div className="flex flex-col items-center max-w-2xl gap-4">
          <h1 className="flex flex-col items-center gap-4 uppercase font-bold text-3xl tracking-widest after:content-[''] after:w-12 after:bg-primary after:rounded-md after:px-1 after:py-[2px]">
            Contact
          </h1>
          <div className="text-center">
            Feel free to contact by submitting the form down below, or by messaging directly at my email address <Link className="font-bold hover:text-primary transition-all" href={'mailto:jeremylavalleegiroux@gmail.com'}>jeremylavalleegiroux@gmail.com</Link>   
          </div>
        </div>
        <div className="bg-white  max-w-3xl w-full mt-24 rounded-lg shadow-2xl">
        <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
