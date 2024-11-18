import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { GiMoonBats } from "react-icons/gi";
import Link from "next/link";

function Navigation() {
  const { setTheme, resolvedTheme } = useTheme();
  function switchTheme() {
    if (resolvedTheme == "dark") {
      setTheme("light");
    } else if (resolvedTheme == "light") {
      setTheme("dark");
    } else {
      setTheme("dark");
    }
  }
  return (
    <div className="w-[30%] mx-[35%] bg-lightFg dark:bg-darkFg  h-[60px] rounded-md mt-10 flex gap-4 items-center justify-evenly">
      <Image
        onClick={() => (window.location.href = "/")}
        className="cursor-pointer"
        src={logo}
        width={30}
        height={30}
        alt="logo"
      />
      <Link href="/profile">
        <h1 className="font-bold text-xl">read routine</h1>
      </Link>
      <span
        onClick={() => switchTheme()}
        className="p-2 bg-lightBg dark:bg-darkBg rounded-md cursor-pointer transition-all "
      >
        {resolvedTheme == "dark" ? <IoSunnyOutline /> : <GiMoonBats />}
      </span>
    </div>
  );
}

export default Navigation;
