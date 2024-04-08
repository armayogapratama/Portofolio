import Navbar from "@/components/Navbar/navbar";
import { MdOutlineFileDownload } from "react-icons/md";
import Mine from "../../public/assets/mine.jpg";
import Image from "next/image";
export default function Page() {
  return (
    <section>
      <Navbar />

      <div className="flex flex-row mx-[9rem] mt-[2rem] items-center justify-center gap-2">
        <div className="flex flex-col gap-5 mr-[2rem]">
          <div className="flex flex-col gap-5 text-white">
            <p>Hi, I am M G Arma Yoga Pratama</p>
            <p>Full Stack Developer</p>
            <div className="">
              <p className="text-justify">
                Starting as a mathematics graduate with a strong logical
                thinking, I became interested in web development and mobile
                development, which led me to decide to further my education at
                Hacktiv8 as a full-stack developer. My journey as a programmer
                became the primary foundation for switching careers with
                expertise in backend and frontend skills. Skills I have acquired
                and immediately implemented in projects, I have become more
                accustomed to and mastered what I have gained. I am seeking a
                platform to develop my abilities and apply what I have learned.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <p>Download</p>
            <MdOutlineFileDownload />
          </div>
        </div>

        <div className="flex justify-end items-center">
          <Image
            className="w-[190rem] h-[30rem] rounded-[50rem]"
            src={Mine}
            alt="Next.js Logo"
          />
        </div>
      </div>
    </section>
  );
}
