"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
const LightDarkToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  return (
    <button
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 overflow-hidden relative"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <>
          <SunIcon
            className="h-[30px] w-[30px] text-orange-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cloudy-fill absolute z-10 bottom-1 left-1 w-6 h-6 text-slate-300"
            data-aos="fade-right"
            viewBox="0 0 16 16"
          >
            <path d="M13.405 7.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 13H13a3 3 0 0 0 .405-5.973" />
          </svg>
        </>
      ) : (
        <>
          <Image
            src="/star.png"
            alt="cloud"
            width={60}
            height={60}
            className="absolute z-10 bottom-0 right-1"
            data-aos="fade-left"
          />
          <MoonIcon
            className="h-[22px] w-[22px] text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          />
        </>
      )}
    </button>
  );
};

export default LightDarkToggle;
