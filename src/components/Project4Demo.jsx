import Image from 'next/image';


export default function Project4Demo({image, title, p}){

 return (
  <>
  <div className="flex flex-col items-center gap-16 1000px:flex-row ">
              <div className="flex flex-col justify-center items-center w-[90%] md:w-fit">
                <Image
                  src={image}
                  className="w-[75rem] rounded-[15px] shadow-lg"
                  alt={title}
                  width={1904}
                  height={952}
                ></Image>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className="max-w-lg">
                  {p}
                </p>
              </div>
            </div>
  </>
 )
}