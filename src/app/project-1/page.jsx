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

import LandingPage from "@/public/project-1/LandinPageBreadit.JPG";
import SignUpBread from "@/public/project-1/SignUpBread.JPG";
import CreateCommBread from "@/public/project-1/CreateCommBread.JPG";
import FindCommBread from "@/public/project-1/FindCommBread.JPG";
import CommPageBread from "@/public/project-1/CommPageBread.JPG";
import CreatePostPageBread from "@/public/project-1/CreatePostPageBread.JPG";
import PostPageBread from "@/public/project-1/PostPageBread.JPG";
import SettingsPageBread from "@/public/project-1/SettingsPageBread.JPG";
import UserPageBread from "@/public/project-1/UserPageBread.JPG";
import FriendsPageBread from "@/public/project-1/FriendsPageBread.JPG";
import Project1Demo from "@/components/Project1Demo";
import "@/styles/main.css";
export default function Project1() {
  return (
    <>
      <section className="flex items-center justify-center h-[70vh] bg-gray bg-cover">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl md:text-5xl font-[900] tracking-wide uppercase text-center leading-[1.2] ">
            BREADIT
          </h1>
          <p className="text-black/80 font-semibold text-center">
            This page contains the project overview, demonstrations, tools, and
            a live link.
          </p>
          <Link
            href={"https://breadit-reddit-clone-alpha.vercel.app/"}
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
              This Reddit clone project was made possible by a project video on
              youtube -{" "}
              <Link
                href={"https://youtu.be/mSUKMfmLAt0?si=ZdXtHFaB36-91RmV"}
                className="text-primary font-bold underline"
                target="_blank"
                rel="noopener"
              >
                Reddit clone
              </Link>
              . From building this website, I have managed to learn Tailwind
              CSS, Zod, modals and Google sign in.
            </div>
            <div>
              Breadit is essentially a Next.js fullstack web application that
              allows users to create communities, subscribe to communities,
              post, upvote and downvote and comment.
            </div>
            <div>
              I took it to the next step and added a bunch features like a
              friends system, user pages, manage comments, manage posts,
              community member list. Learn more in the{" "}
              <Link
                href={"/project-1/#demonstrations"}
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
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md  transition-all">
              <SiPrisma className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              Prisma
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
            <Project1Demo
              image={LandingPage}
              title={"Landing page"}
              p={
                "On the landing page you will find a general feed of posts made by individuals in different communities. If you want to see specific posts in your feed, you can sign in with your Google account and subscribe to different communities."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project1Demo
              image={SignUpBread}
              title={"Sign Up"}
              p={
                "At the top of the page you will find a button that will allow you to connect your Google account to Breadit"
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project1Demo
              image={CreateCommBread}
              title={"Create Community"}
              p={
                "After you are logged in, you can access the create community page by clicking the Create Community button on the home page. Now enter the desired name and click create!"
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project1Demo
              image={FindCommBread}
              title={"Find a Community"}
              p={
                "If you find already existing communities by their name, you can use the search bar at the top of the page to filter communities by what you type."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project1Demo
              image={CommPageBread}
              title={"Community page"}
              p={
                "On a community page, you can find the creation date, the amount of members and the posts made in that community. I have made added the members tab on the right to see the creator of the community and all the current members."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project1Demo
              image={CreatePostPageBread}
              title={"Create a post"}
              p={
                "With the create a post in the About section of a community, you can create your own posts. You can add a title, pictures, code snippets, lists, and more!"
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project1Demo
              image={PostPageBread}
              title={"Post page"}
              p={
                "On a post page, which can be accessed by clicking on the title of a post, you can see the full content of the post, you can add comment and reply to comments. I have added the possibility to delete your own comments and edit them by clicking on the 3 dots by your name."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project1Demo
              image={SettingsPageBread}
              title={"Settings page"}
              p={
                "You can access this page by clicking on your profile picture in the top right of the page and selecting Settings from the dropdown menu. Here you can change you display name. I have added the functionnality to delete your posts here."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project1Demo
              image={UserPageBread}
              title={"User page"}
              p={
                "This page was completely done by me. By clicking on a user, from a post or a community, you can see all the posts made by that user, the amount of comments, posts, and communities that he/she is apart of. You can also subscribe of leave the communities moderated by that user directly here."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project1Demo
              image={FriendsPageBread}
              title={"Friends page"}
              p={
                "This page was completely done by me. You can access this page by clicking on your profile picture in the top right of the page and selecting Friends from the dropdown menu. Here you can search for users by username and send friend request to them. If you receive a friend request it will appear here. You can try it with me, my username is Jeremy."
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
              href={"https://breadit-reddit-clone-alpha.vercel.app/"}
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
