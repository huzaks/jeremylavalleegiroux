
import Link from "next/link";
import { FaHtml5, FaCss3Alt} from "react-icons/fa6";
import {
  SiAzuredevops,
  SiAdobedreamweaver,
  SiAdobephotoshop
} from "react-icons/si";

import work1 from "@/public/work-projects/www.sac-isc.gc.ca_eng_1709665163424_1709665191654.png";
import work2 from "@/public/work-projects/www.sac-isc.gc.ca_eng_1707323099962_1707323144536.png";
import work3 from "@/public/work-projects/www.sac-isc.gc.ca_eng_1677260444177_1677260475526.png";
import work4 from "@/public/work-projects/www.rcaanc-cirnac.gc.ca_eng_1100100030285_1529354158736.png";
import work5 from "@/public/work-projects/www.rcaanc-cirnac.gc.ca_eng_1100100013251_1534874002459.png"
import "@/styles/main.css";
import Footer from "@/components/Footer";
import ProjectDemoWork from "@/components/ProjectDemoWork";
export default function ProjectWork() {
  return (
    <>
      <section className="flex items-center justify-center h-[70vh] bg-gray bg-cover">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl md:text-5xl font-[900] tracking-wide uppercase text-center leading-[1.2] ">
          ISC/CIRNAC
          </h1>
          <p className="text-black/80 font-semibold text-center">
            This page contains projects overview, demonstrations, tools, and
            live links.
          </p>
          <Link
            href={"/work-projects/#demonstrations"}
            className="mt-4 py-4 px-20 bg-primary text-white w-fit rounded-md font-bold hover:-translate-y-1 transition-all"
          >
            DEMONSTRATIONS
          </Link>
        </div>
      </section>
      <section className="flex flex-col relative w-full px-8 md:px-44 py-32 gap-16 bg-white">
        <div className="flex flex-col max-w-2xl gap-4">
          <h1 className="flex flex-col font-bold text-2xl tracking-widest after:content-[''] after:w-16 after:bg-primary after:rounded-md after:px-1 after:py-[2px]">
            Projects overview
          </h1>
          <div className="flex flex-col gap-4 text-black/70">
            <div>
              I had the opportunity to work as a Communications Web Developer at Indigenous Services Canada from December 2023 to May 2024, and from December 2024-2025.
            </div>
            <div>
            In the <Link href={"/work-projects/#demonstrations"} className="text-primary font-bold underline">demonstrations section</Link> you will find some of my favourite work that I completed during my time at <Link className="text-primary font-bold underline" href={"https://www.canada.ca/en/indigenous-services-canada.html"} target="_blank" rel="noopener">ISC</Link>. These projects have helped me understand how to use HTML5 professionally. Additionally, they have helped me tremendously at maintaining excellent communication with clients and colleagues, as well as learning to manage many ongoing projects simultaneously.
            </div>
            <div>These pages have been done in English and French.</div>
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
                <FaCss3Alt className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />CSS
              </div>
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <SiAzuredevops className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />Azure DevOps
              </div>
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <SiAdobedreamweaver className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />Dreamweaver
              </div>

          </div>
        </div>
        <div className="flex flex-col max-w-2xl gap-4">
          <h1 className="flex flex-col font-bold text-2xl tracking-widest after:content-[''] after:w-16 after:bg-primary after:rounded-md after:px-1 after:py-[2px]">
            Tool less frequently used
          </h1>
          <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md transition-all">
                <SiAdobephotoshop className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />Photoshop
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
            <ProjectDemoWork
              image={work1}
              title={"Evaluation of Land Management Sub-Programs"}
              p={
                "Building this page has helped me learn how to properly use abbreviations, blockquotes, footnotes and images with text alternative."
              }
              link={"https://www.sac-isc.gc.ca/eng/1709665163424/1709665191654"}
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <ProjectDemoWork
              image={work2}
              title={"Audit of Land Management"}
              p={
                "This was my first audit page where I perfected what I learned in the page above."
              }
              link={"https://www.sac-isc.gc.ca/eng/1707323099962/1707323144536"}
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <ProjectDemoWork
              image={work3}
              title={"Future-Oriented Statements of Operations"}
              p={
                "Future-oriented Statements of Operations is the first page that I built that used complex data tables easily accessible for users using a screen reader."
              }
              link={"https://www.sac-isc.gc.ca/eng/1677260444177/1677260475526"}
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <ProjectDemoWork
              image={work4}
              title={"Negotiations in progress"}
              p={
                "This page helped me practice the use of details sections for pages with a lot of content."
              }
              link={"https://www.rcaanc-cirnac.gc.ca/eng/1100100030285/1529354158736"}
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <ProjectDemoWork
              image={work5}
              title={"Images for National Indigenous History Month"}
              p={
                "For National Indigenous History Month 2024, I updated this page to display the most recent images. It also helped me practice image resizing for web using Photoshop, which I rarely used during my time there."
              }
              link={"https://www.rcaanc-cirnac.gc.ca/eng/1100100013251/1534874002459"}
            />
            
          </div>
        </div>
        <div className="flex flex-col max-w-5xl gap-4 ">
          {/* <h1 className="flex flex-col font-bold text-2xl tracking-widest after:content-[''] after:w-16 after:bg-primary after:rounded-md after:px-1 after:py-[2px]">
            Link
          </h1> */}
          <div className="flex flex-col md:flex-row gap-4">
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
