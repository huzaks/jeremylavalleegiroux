import Image from "next/image"
import Link from "next/link"

export default function Project({image, name, description, link, ...props}) {
    return (
        <div className="flex gap-24 items-center">
              <div className="flex flex-col w-fit justify-center items-center">
              <Image src={image} className="w-[32rem] rounded-t-[15px] border-[1rem] border-black" alt={name}>
                {/* <div className="max-w-[32rem] w-full h-[22rem] bg-black-project bg-top bg-cover"></div> */}
              </Image>
              <div className="relative max-w-[36rem] w-[110%] bg-black h-6 rounded-md ">
                <span className="absolute top-0 right-[50%] w-16 h-3 bg-white translate-x-[50%] rounded-b-sm"></span>
              </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl">{name}</h2>
                <p className="max-w-lg">{description}<strong>{props.note}</strong></p>
                <Link href={link} className="button-med-gray">LEARN MORE</Link>
              </div>
            </div>
    )
}