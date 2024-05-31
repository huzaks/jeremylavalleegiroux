'use client'

import Image from 'next/image';
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from 'next/link';


export default function ProjectDemoWork({image, title, p, link}){

  const refDemo = useRef(null)

  const {scrollYProgress} = useScroll({
    target: refDemo,
    offset: ["0 1", "1.33 1"]
  })

  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1])
 return (
  <>
  <motion.div  style={{scale: scaleProgress, opacity: opacityProgress}} ref={refDemo} className="flex flex-col items-center gap-16 1000px:flex-row ">
              <div className="flex flex-col justify-center items-center w-[90%] md:w-fit">
                <Link href={link} target='_blank' rel='noopener'>
                <Image
                  src={image}
                  className="w-[75rem] rounded-[15px] shadow-lg"
                  alt={title}
                  width={1904}
                  height={952}
                ></Image>
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className="max-w-lg">
                  {p}
                </p>
              </div>
            </motion.div>
  </>
 )
}