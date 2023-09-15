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

import LandingPageWorkout from '@/public/project-2/LandingPageWorkout.JPG'
import HomePageWorkout from '@/public/project-2/HomePageWorkout.JPG'
import BookWorkout from '@/public/project-2/BookWorkout.JPG'
import ProfileWorkout from '@/public/project-2/ProfileWorkout.JPG'
import SettingsWorkout from '@/public/project-2/SettingsWorkout.JPG'
import MyWorkouts from '@/public/project-2/MyWorkouts.JPG'
import "@/styles/main.css";
import ProjectDemo from "@/components/ProjectDemo";
import Footer from "@/components/Footer";
export default function Project2() {
  return (
    <>
      <section className="flex items-center justify-center h-[70vh] bg-gray bg-cover">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl md:text-5xl font-[900] tracking-wide uppercase text-center leading-[1.2] ">
            D WORKOUT
          </h1>
          <p className="text-black/80 font-semibold text-center">
            This page contains the project overview, demonstrations, tools, and
            a live link.
          </p>
          <Link
            href={"https://d-workout.vercel.app/"}
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
              The goal of this project was to create a web application made for
              anyone who would want to achieve a greater mental health status,
              or simply increase their gains 💪.
            </div>
            <div>
              With this website, users can authenticate with their Google
              account and book workouts with the best fitness instructors in the region!
            </div>
            <div>
            Learn more in the{" "}
              <Link
                href={"/project-2/#demonstrations"}
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
            
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md  transition-all">
              <SiTypescript className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              TypeScript
            </div>
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md  transition-all">
              <FaReact className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              React
            </div>
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
              <SiTailwindcss className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              Tailwind CSS
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
        <div className="flex flex-col max-w-5xl gap-4 " id="demonstrations">
          <h1
            
            className="flex flex-col font-bold text-2xl tracking-widest after:content-[''] after:w-16 after:bg-primary after:rounded-md after:px-1 after:py-[2px]"
          >
            Demonstrations
          </h1>
          <div className="flex flex-col gap-8 py-4">
          <ProjectDemo
              image={LandingPageWorkout}
              title={"Landing page"}
              p={
                "On the landing page you will find a sign in button at the top of the page to connect with your Google account."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <ProjectDemo
              image={HomePageWorkout}
              title={"Home page"}
              p={
                "After scrolling on the home page, you will be able to find all our fitness instructors and their speciality."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <ProjectDemo
              image={BookWorkout}
              title={"Book a workout"}
              p={
                "After you find the workout that you would like to participate in, you can click on the Book button and choose the date when you would like to train."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <ProjectDemo
              image={ProfileWorkout}
              title={"Profile page"}
              p={
                "You can access this page by clicking on your profile picture in the top right of the page and selecting Profile from the dropdown menu. Here you will find your personal achievements and your account information."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <ProjectDemo
              image={SettingsWorkout}
              title={"Settings page"}
              p={
                "You can access this page by clicking on your profile picture in the top right of the page and selecting Settings from the dropdown menu. On this page you are able to modify your D Workout username."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <ProjectDemo
              image={MyWorkouts}
              title={"Personal workouts page"}
              p={
                "You can access this page by clicking on your profile picture in the top right of the page and selecting My Workouts from the dropdown menu. Here you are able to view you next workouts and your calendar."
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
              href={"https://d-workout.vercel.app/"}
              className="mt-4 py-4 px-12 bg-primary text-white w-fit rounded-md font-bold hover:-translate-y-1 transition-all"
              target="_blank"
              rel="noopener"
            >
              LIVE LINK
            </Link>
            <Link
              href={"/"}
              className="mt-4 py-4 px-12 bg-white text-black w-fit rounded-md font-bold hover:-translate-y-1 transition-all border-2 border-primary"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
