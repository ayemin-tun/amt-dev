import profile from "@/public/profile.jpg";
import Image from "next/image";
import PageHeader from "../PageHeader";
const About = () => {
  return (
    <div
      className="w-full h-auto md:min-h-screen md:px-28 px-8 py-16 dark:bg-slate-800"
      id="about"
    >
      <div className="w-full md:flex ">
        <div className="md:w-1/5 w-full h-auto flex justify-center items-start border-r-2 border-gray-400">
          <PageHeader>About Us</PageHeader>
        </div>
        <div className="md:w-4/5 w-full h-auto p-5">
          <div className="w-full flex md:justify-start justify-center">
            <Image
              src={profile}
              alt="profile"
              width={176}
              height={176}
              className="w-44 h-44 border-8 border-gray-600 dark:border-slate-300 bg-gray-400 transition-colors duration-500"
              data-aos="zoom-in"
            />
          </div>

          <h1 className="text-white font-bold text-2xl mt-2" data-aos="zoom-in">
            Hello World,
          </h1>
          <p
            className="mt-3 text-pretty dark:text-white transition-colors duration-500"
            data-aos="zoom-in"
          >
            Hi, I&apos;m{" "}
            <span className="text-blue-700 dark:text-orange-500 font-bold uppercase transition-colors duration-500">
              Aye Min Tun
            </span>
            , a 23-year-old junior web developer. I&apos;m enthusiastic about
            problem-solving and communication. With a portfolio of projects,
            I&apos;m eager to apply my skills and expand my web development
            expertise on real-world projects.
          </p>

          <div
            className="grid md:grid-cols-2 grid-cols-1 mt-2 dark:text-white transition-colors duration-500"
            data-aos="zoom-in"
          >
            <div>
              <p>
                Name : <span className="font-medium">Aye Min Tun</span>
              </p>
              <p>
                Birthday : <span className="font-medium">9 April, 2000</span>
              </p>
            </div>
            <div>
              <p>
                Address : <span className="font-medium">Yangon</span>
              </p>
              <p>
                Email : <span className="font-medium">amtamt547@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-5" data-aos="zoom-in">
            <button className="px-4 py-2 bg-gray-600 hover:bg-slate-200 duration-300 transition-transform hover:-translate-y-2 text-white text-sm hover:animate-bounce hover:text-black ">
              Download CV
            </button>
            <a href="mailto:amtamt547@gmail.com">
              <button className="px-4 py-2 bg-slate-200 hover:bg-gray-600 duration-300 transition-transform hover:-translate-y-2 hover:text-white text-sm  hover:animate-bounce">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
