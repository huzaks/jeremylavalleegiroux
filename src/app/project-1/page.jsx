import Link from "next/link"

export default function Project1() {
    return (
        <section className="h-[100vh] flex items-center justify-center relative">
            <div className="absolute top-[40%] text-4xl font-bold">
                <Link href={'/'}>Back</Link>
                <div>
            This page is still a work in progress!</div></div>
        </section>
    )
}