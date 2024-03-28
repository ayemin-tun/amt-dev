import Link from "next/link";
import ContactIconBox from "./ContactIconBox";

const Hero = () => {
  return (
    <header className="w-full h-screen dark:bg-slate-800 flex md:justify-center justify-start items-center dark:text-white transition-colors duration-500">
      <div className="w-[40rem] md:h-auto h-[400px]">
        <h1
          className="font-extrabold text-5xl px-6 mb-2 md:text-center text-gray-600 dark:text-slate-300"
          data-aos="fade-right"
        >
          HI, I AM AYE MIN TUN
        </h1>
        <h2
          className="text-blue-600 dark:text-orange-600 w-full px-6 md:text-center uppercase tracking-widest lg:text-lg md:text-base font-bold transition-colors duration-500"
          data-aos="fade-left"
        >
          Full Statck Developer
        </h2>
        <p
          className="lg:text-medium text-sm md:text-center container mx-auto md:px-10 px-6"
          data-aos="fade-right"
        >
          My mission is to design and develop a website that you and your
          audience love.
        </p>
        <div className="px-6 py-3 md:hidden" data-aos="fade-left">
          <Link href="#about" className="flex items-center gap-1">
            About Me{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right text-2xl"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
        </div>
        <div>
          <ContactIconBox />
        </div>
      </div>
    </header>
  );
};

export default Hero;
