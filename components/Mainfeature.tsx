import Link from "next/link";
import React from "react";
import { BsHighlighter } from "react-icons/bs";

function Mainfeature() {
  return (
    <div className="w-[80%] mb-4 grid grid-cols-2 gap-10 min-h-[100px] p-4 bg-lightFg dark:bg-darkFg rounded-md mt-2 mx-auto">
      <div className="flex gap-4 bg-lightBg p-2 dark:bg-darkBg rounded-md">
        <img
          className="w-[200px] h-full object-cover rounded-md"
          src="https://cdn.pixabay.com/photo/2020/03/12/19/36/the-legal-4926021_640.jpg"
          alt="currently reading"
        />
        <div className="flex flex-col gap-2 items-start justify-center">
          <h3 className="flex items-center gap-1 dark:text-green-100">
            <p className="w-[10px] animate-ping h-[10px] bg-mainColor rounded-[100vh]"></p>
            currently reading
          </h3>
          <h1 className="font-extrabold text-xl text-mainColor">
            48 Laws of power by...
          </h1>
          <p className="text-md my-1">20 highlights</p>
          <div className="flex gap-1">
            <p
              className="p-1 bg-lightFg text-sm dark
           dark:bg-darkFg rounded-md"
            >
              comic
            </p>
            <p
              className="p-1 bg-lightFg dark
           dark:bg-darkFg text-sm rounded-md"
            >
              romance
            </p>
          </div>
          <p className="text-sm text-red-500 my-1">not yet finished</p>
          <button className="bg-mainColor hover:bg-secondaryGreen text-white w-[200px] h-[40px] mt-4 rounded-md">mark as done</button>
        </div>
      </div>
      <div>
        <h1 className="text-md text-lightText dark:text-darkText font-bold mb-4">previously read</h1>
        <div>
          <ul>
            <li className="border-b-2 dark:border-darkBg p-4 w-[80%] "><div className="flex flex-col gap-1 text-sm">
              <h3 className="font-extrabold text-secondaryGreen">The art of winning</h3>
              <span className="flex items-center justify-start gap-2"><BsHighlighter /> &nbsp;120highlights</span>
              </div></li>
            <li className="border-b-2 dark:border-darkBg p-4 w-[80%] "><div className="flex flex-col gap-1 text-sm">
              <h3 className="font-extrabold text-secondaryGreen">Win friends and influence people</h3>
              <span className="flex items-center justify-start gap-2"><BsHighlighter /> &nbsp;200highlights</span>
              </div></li>
            <li className="border-b-2 dark:border-darkBg p-4 w-[80%] "><div className="flex flex-col gap-1 text-sm">
              <h3 className="font-extrabold text-secondaryGreen">The fallen man</h3>
              <span className="flex items-center justify-start gap-2"><BsHighlighter /> &nbsp;20highlights</span>
              </div></li>
          </ul>
          <button className="underline text-mainColor mt-4">view all</button>
        </div>
      </div>
    </div>
  );
}

export default Mainfeature;
