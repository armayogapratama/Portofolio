import AboutHome from "@/components/AboutMe/AboutHome";
import Hero from "@/components/Hero/hero";

export default function Home() {
  return (
    <div>
      <main className="mx-[3rem] mt-[6rem] h-full w-full">
        <div className="flex flex-col gap-20">
          <div>
            <Hero />
          </div>

          <div className="mx-[5rem] mb-[2rem] mt-[3rem] flex flex-col text-white">
            <div className="flex justify-center">
              <h1 className="text-4xl poppins-light poppins-semibold italic">
                About Me
              </h1>
            </div>

            <div>
              <AboutHome />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
