import { IoHome } from "react-icons/io5";
import brand from "../../../public/assets/Brand-Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mt-[2rem] rounded-xl p-[1rem fixed top-0 left-0 right-0 z-10">
      <div className="flex flex-row justify-between mx-[8rem] shadow-md bg-gray-200 rounded-xl px-[2rem] py-[.5rem] outline outline-1 outline-black">
        <Link href={"/"}>
          <Image
            className="size-[3rem] w-[6rem] cursor-pointer"
            src={brand}
            alt="MGAYP"
          />
        </Link>

        <div className="flex flex-row gap-8 items-center">
          <Link
            href={"/skill"}
            className="hover:border-b-[.1rem] hover:pb-[.5rem] hover:border-b-black shadow-md p-[.5rem] rounded-md text-black hover:bg-white cursor-pointer hover:transition-transform hover:ease-in-out hover:duration-300 w-[7rem] text-center">
            Skill
          </Link>

          <Link
            href={"/project"}
            className="hover:border-b-[.1rem] hover:pb-[.5rem] hover:border-b-black shadow-md p-[.5rem] rounded-md text-black hover:bg-white cursor-pointer hover:transition-transform hover:ease-in-out hover:duration-300 w-[7rem] text-center">
            Project
          </Link>
        </div>

        <Link href={"/"} className="flex flex-row items-center gap-1">
          <IoHome className="size-[2rem] cursor-pointer text-black" />
          <h2 className="cursor-pointer text-black">Home</h2>
        </Link>
      </div>
    </div>
  );
}
