import React from "react";
import { BsHighlighter } from "react-icons/bs";

function Articles() {
  return (
    <div className="w-[80%] mb-4 grid grid-cols-2 gap-10 min-h-[100px] p-4 bg-lightFg dark:bg-darkFg rounded-md mt-2 mx-auto">
      <div>
        <h1 className="text-md text-lightText dark:text-darkText font-bold mb-4">
          previously summarized
        </h1>
        <div>
          <ul>
            <li className="border-b-2 dark:border-darkBg p-4 w-[80%] ">
              <div className="flex flex-col gap-1 text-sm">
                <h3 className="font-extrabold text-secondaryGreen">
                  seven signs that you have ADHD
                </h3>
                <span className="flex items-center justify-start gap-2">
                  <BsHighlighter /> &nbsp;120highlights
                </span>
              </div>
            </li>
            <li className="border-b-2 dark:border-darkBg p-4 w-[80%] ">
              <div className="flex flex-col gap-1 text-sm">
                <h3 className="font-extrabold text-secondaryGreen">
                  How to maintain focus
                </h3>
                <span className="flex items-center justify-start gap-2">
                  <BsHighlighter /> &nbsp;200highlights
                </span>
              </div>
            </li>
            <li className="border-b-2 dark:border-darkBg p-4 w-[80%] ">
              <div className="flex flex-col gap-1 text-sm">
                <h3 className="font-extrabold text-secondaryGreen">
                  How to mix sodium hydrate with water
                </h3>
                <span className="flex items-center justify-start gap-2">
                  <BsHighlighter /> &nbsp;20highlights
                </span>
              </div>
            </li>
          </ul>
          <button className="underline text-mainColor mt-4">view all</button>
        </div>
      </div>
      <div>
        <h1 className="text-md text-lightText dark:text-darkText font-bold mb-4">
          Articles
        </h1>
        <span className="text-sm">
          summarize online blogs with ease and for future refrence.The website
          will also help you remember the articles you have read with ease
          through timed notificatins
        </span>
        <div>
          <button className="bg-mainColor hover:bg-secondaryGreen text-white w-[200px] h-[40px] mt-4 rounded-md">
            new article
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
