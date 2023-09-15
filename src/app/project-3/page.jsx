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

import HomeManga from '@/public/project-3/HomeManga.JPG'
import SignUpManga from '@/public/project-3/SignUpManga.JPG'
import LoginManga from '@/public/project-3/LoginManga.JPG'
import SearchManga from '@/public/project-3/SearchManga.JPG'
import AccountManga from '@/public/project-3/AccountManga.JPG'
import WishlistManga from '@/public/project-3/WishlistManga.JPG'
import CartManga from '@/public/project-3/CartManga.JPG'
import OrderManga from '@/public/project-3/OrderManga.JPG'
import ProductManga from '@/public/project-3/ProductManga.JPG'
import "@/styles/main.css";
import Project3Demo from "@/components/Project2Demo";
export default function Project3() {
  return (
    <>
      <section className="flex items-center justify-center h-[70vh] bg-gray bg-cover">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-3xl md:text-5xl font-[900] tracking-wide uppercase text-center leading-[1.2] ">
            MANGASHOP
          </h1>
          <p className="text-black/80 font-semibold text-center">
            This page contains the project overview, demonstrations, tools, and
            a live link.
          </p>
          <Link
            href={"https://mangashop-nu.vercel.app/"}
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
              One of my passion in life is to read and collect manga. In short, they are black and white comic books from Japan.
            </div>
            <div>
              I wanted to build something that is important to me, so I went and created this fullstack online shop. It offers a couple of my favourite series.
            </div>
            <div>Here you can view the individual volumes, you can search by name, you can add to your wishlist, add to a personal cart and order. Although you cannot actually buy them, you can simulate an simple order placement.</div>
            <div>
            Learn more in the{" "}
              <Link
                href={"/project-3/#demonstrations"}
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
              <SiTypescript className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              TypeScript
            </div>
            <div className="flex flex-col gap-2 items-center py-3 px-4 rounded-md  transition-all">
              <FaReact className="h-8 w-8 hover:scale-[1.2] transition-all hover:text-primary cursor-pointer " />
              React
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
        <div className="flex flex-col max-w-5xl gap-4 ">
          <h1
            id="demonstrations"
            className="flex flex-col font-bold text-2xl tracking-widest after:content-[''] after:w-16 after:bg-primary after:rounded-md after:px-1 after:py-[2px]"
          >
            Demonstrations
          </h1>
          <div className="flex flex-col gap-8 py-4">
          <Project3Demo
              image={HomeManga}
              title={"Home page"}
              p={
                "On the landing page you will find featured collections of manga."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <Project3Demo
              image={SignUpManga}
              title={"Sign Up page"}
              p={
                "You can access this page by clicking on the Sign Up button at the top. You will need to enter some information to creat your first account"
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <Project3Demo
              image={LoginManga}
              title={"Login page"}
              p={
                "After creating your first account, you can log in to gain full access to the web page."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <Project3Demo
              image={SearchManga}
              title={"Search page"}
              p={
                "You can access this page by clicking on the Search button at the top. Here you can view all available mangas, search one by its name and filter by categorie."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
            <Project3Demo
              image={ProductManga}
              title={"Product page"}
              p={
                "When clicking on a product, you will see everything about the product (title, publication date, author, synapsis and the price). You can either add the item to your cart or your wishlist."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          
          <Project3Demo
              image={AccountManga}
              title={"Account page"}
              p={
                "Here you can modify your profile information, view your order history and disconnect your account from the page."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <Project3Demo
              image={WishlistManga}
              title={"Wishlist page"}
              p={
                "Here, all of the products that you ended up adding to your wishlist will be here. You can choose to remove them from your list or add them to your cart."
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <Project3Demo
              image={CartManga}
              title={"Cart page"}
              p={
                "Your cart contains the items that were added to your cart. You can update the amount of volumes you would like to order or remove them. If you are satisfied, you can proceed to the next step : Placing an order!"
              }
            />
            <div className="w-full border-b-2 border-black/20"></div>
          <Project3Demo
              image={OrderManga}
              title={"Order page"}
              p={
                "When ordering, theres no Stripe or Shopify functionnality because this was my first fullstack project and took long enough to get there. Overrall I am very satisfied with this project and learned a lot."
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
              href={"https://mangashop-nu.vercel.app/"}
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
