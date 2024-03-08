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
          className="h-[25px] w-[25px] text-orange-300"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        />
        <Image
            src="/cloud.webp"
            alt="cloud"
            width={23}
            height={23}
            className="absolute z-10 bottom-2 left-1"
            data-aos="fade-right"
          />
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
            className="h-[20px] w-[20px] text-orange-800"
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
