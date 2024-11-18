"use client";
import React, { useEffect } from "react";
import Feature from "@/components/Feature";
import Extras from "@/components/Extras";
import Quotes from "@/components/Quotes";
import PricingCard from "@/components/Pricing";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navigation from "@/components/Navigation";
function Page() {

  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg">
      <Navigation />
      <div className="to-blue-300 my-10 mt-20 w-[80%] mx-[10%] min-h-[300px]  grid place-items-center grid-cols-2 gap-4">
        <div className="p-2  h-full flex flex-col items-start justify-center ">
          <h1 className="text-6xl leading-11  text-mainColor font-bold">
            Cultivate Your reading habit
          </h1>
          <span className="mt-4">
            Cultivate your reading habit with simple goals and{" "}
            <span className="text-mainColor">
              never ever forget what you learn from books.
            </span>
          </span>
          <Link href="/accounts">
            {" "}
            <button className=" my-10 text-slate-100 hover:text-white p-4 bg-mainColor rounded-xl transition-all duration-500 hover:-translate-y-1 mb-4 ">
              start my journey
            </button>
          </Link>
          <a href="/accounts/login" className="underline text-sm mx-4">
            already a user
          </a>
        </div>

        {/* demos */}
        <div className="w-full h-full bg-lightFg dark:bg-darkFg rounded-md"></div>
      </div>
      <Feature />
      <Extras />
      <Quotes />
      <PricingCard />
      <Footer />
    </div>
  );
}

export default Page;
