"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import BackgroundImage from "../BackgroundImage";

const ScrollSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const count = 5;
    const total = count * 100;
    const translateX = 0 - (total - 100) + 'vw';
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: translateX,
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 1,
                    pin: true,
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);

    // Function to generate the repeated div blocks
    const generateSections = (count) => {
        const sections = [];

        for (let i = 1; i <= count; i++) {
            sections.push(
                <div key={i} className={` h-[100vh] w-screen flex justify-center items-center border`}>
                    <h3 className="text-white font-bold text-lg" data-aos="fade-up">Section {i}</h3>
                </div>
            );
        }

        return sections;
    };

    return (
        <div className="w-full bg-gray-400 overflow-hidden"  id="projects" >
            <div ref={triggerRef}>
                <BackgroundImage />
                <div ref={sectionRef} className={`h-[100vh] w-[500vw] flex relative`}>
                    {generateSections(count)}
                </div>
            </div>
        </div>
    );
};

export default ScrollSection;
