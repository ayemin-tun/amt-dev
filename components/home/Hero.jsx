import ContactIconBox from "./ContactIconBox";

const Hero = () => {
  return (
    <header className="w-full h-screen dark:bg-slate-800 flex justify-center items-center dark:text-white transition-colors duration-500">
      <div className="w-[40rem]">
        <h1
          className="font-extrabold md:text-3xl lg:text-5xl text-2xl mb-2 text-center"
          data-aos="fade-right"
        >
          HI, I AM AYE MIN TUN
        </h1>
        <h2
          className="text-blue-600 dark:text-orange-600 w-full text-center uppercase tracking-widest lg:text-lg md:text-base font-bold transition-colors duration-500"
          data-aos="fade-left"
        >
          Full Statck Developer
        </h2>
        <h2
          className="lg:text-medium text-sm text-center container mx-auto px-10"
          data-aos="fade-right"
        >
          My mission is to design and develop a website that you and your
          audience love.
        </h2>
        <div>
          <ContactIconBox />
        </div>
      </div>
    </header>
  );
};

export default Hero;
