import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiVercel,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import HomeEssentials from '@/public/project-4/HomeEssentials.JPG'
import CategoriesEssentials from '@/public/project-4/CategoriesEssentials.JPG'
import ProductEssentials from '@/public/project-4/ProductEssentials.JPG'
import "@/styles/main.css";
import Project4Demo from "@/components/Project4Demo";
export default function Project3() {
  return (
    <>
      <section className="flex items-center justify-center h-[70vh] bg-gray bg-cover">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl md:text-5xl font-[900] tracking-wide uppercase text-center leading-[1.2] ">
            MINISSENTIALS
          </h1>
          <p className="text-black/80 font-semibold text-center">
            This page contains the project overview, demonstrations, tools, and
            a live link.
          </p>
          <Link
            href={"https://minissentials.vercel.app/"}
            className="mt-4 py-4 px-20 bg-primary text-white w-fit rounded-md font-bold hover:-translate-y-1 transition-all"
            target="_blank"
            rel="noopener"
          >
            LIVE LINK
          </Link>
        </div>
      </section>
      <section className="flex flex-col relative w-full px-8 md:px-44 py-32 gap-16 bg-white">
        <div className="flex flex-col max-w-2xl gap-4">
          <h1 className="flex flex-col font-bold text-2xl tracking-widest after:content-[''] after:w-16 after:bg-primary after:rounded-md after:px-1 after:py-[2px]">
            Project overview
          </h1>
          <div className="flex flex-col gap-4 text-black/70">
            <div>
              With this project, I wanted to make something simple. So I did a simple frontend for an online shop for essential items.
            </div>
            <div>
              The items come the Amazon website. I've gathered relevant information for each item and put them in a JSON file. I then use a little bit of JavaScript to get the items.
            </div>
            <div>
            Learn more in the{" "}
              <Link
                href={"/project-4/#demonstrations"}
                className="text-primary font-bold underline"
              >
                Demonstrations
              </Link>{" "}
              section.
            </div>

          </div>
        </div>
        <div className="flex flex-col max-w-2xl gap-4">
          <h1 className="flex flex-col font-bold text-2xl tracking-widest after:content-[''] after:w-16 after:bg-primary after:rounded-md after:px-1 after:py-[2px]">
            Tools used
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
              <FaHtml5 className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              HTML
            </div>
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
              <FaCss3Alt className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              CSS
            </div>
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md  transition-all">
              <IoLogoJavascript className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              JavaScript
            </div>
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md  transition-all">
              <FaReact className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              React
            </div>
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
              <SiNextdotjs className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              Next.js
            </div>
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
              <FaGithub className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              GitHub
            </div>
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
              <SiVercel className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              Vercel
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-5xl gap-4 ">
          <h1
            id="demonstrations"
            className="flex flex-col font-bold text-2xl tracking-widest after:content-[''] after:w-16 after:bg-primary after:rounded-md after:px-1 after:py-[2px]"
          >
            Demonstrations
          </h1>
          <div className="flex flex-col gap-8 py-4">
          
          <Project4Demo
              image={HomeEssentials}
              title={"Landing page"}
              p={
                "The landing page contains everything you need to know about this website."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <Project4Demo
              image={CategoriesEssentials}
              title={"Categories page"}
              p={
                "Here you can find all the products and filter them by their categories."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <Project4Demo
              image={ProductEssentials}
              title={"Product page"}
              p={
                "On this page you can find important information about the product and a direct link to the amazon website."
              }
            />

            
            
          </div>
        </div>
        <div className="flex flex-col max-w-5xl gap-4 ">
          <h1 className="flex flex-col font-bold text-2xl tracking-widest after:content-[''] after:w-16 after:bg-primary after:rounded-md after:px-1 after:py-[2px]">
            Links
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href={"https://minissentials.vercel.app/"}
              className="mt-4 py-4 px-12 bg-primary text-white w-fit rounded-md font-bold hover:-translate-y-1 transition-all"
              target="_blank"
              rel="noopener"
            >
              LIVE LINK
            </Link>
            <Link
              href={"/"}
              className="mt-4 py-4 px-12 bg-white text-black w-fit rounded-md font-bold hover:-translate-y-1 transition-all border-2 border-primary"
              target="_blank"
              rel="noopener"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
