import BackgroundImage from "./BackgroundImage";
import ShowAnimation from "./ShowAnimation";

const Hero = () => {
    return (
        <header className="w-full h-screen flex justify-center items-center">
            <BackgroundImage />
            <div>
                <ShowAnimation delay={0.4}>
                    <h1 className="font-extrabold text-8xl mb-2 text-white">John Doe</h1>
                </ShowAnimation>
                <h2 className="text-blue-600 w-full text-center uppercase tracking-widest">Frontend Developer</h2>
            </div>
        </header>
    );
};

export default Hero;
