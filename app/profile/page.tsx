"use client";
import Navigation from "@/components/Navigation";
import React from "react";
import { AiOutlineHighlight } from "react-icons/ai";
import { BiUpvote } from "react-icons/bi";
import { CiBookmark, CiEdit } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { LuBookOpenCheck } from "react-icons/lu";

const Page = () => {
  const generateProfileUrl = (style:string, flip:boolean) => {
    const seed = Math.random().toString(36).substring(2, 15);
    return `https://api.dicebear.com/9.x/${style}/svg?seed=${seed}&flip=${flip}`;
  };

  const profile = generateProfileUrl("adventurer", false);

  return (
    <div>
      <Navigation />
      <div className="w-[80%] grid grid-cols-2 min-h-[300px] p-4 bg-lightFg dark:bg-darkFg rounded-md mt-2 mx-auto">
        <div
          id="user_information"
          className="w-full min-h-[100px] rounded-md p-6"
        >
          <div className="flex items-start gap-6">
            {/* Avatar Section */}
            <div className="w-32 flex flex-col items-center">
              <div className="w-full aspect-square border border-mainColor rounded-lg overflow-hidden bg-lightBg dark:bg-darkBg">
                <img 
                  src={profile} 
                  className="w-full h-full object-cover" 
                  alt="avatar" 
                />
              </div>
              <button className="w-full mt-2 px-3 py-2 bg-lightBg dark:bg-darkBg text-sm flex items-center justify-center gap-2 rounded-md transition-all hover:border-mainColor hover:border">
                <CiEdit className="text-lg" />
                <span>Change</span>
              </button>
            </div>

            {/* User Details Section */}
            <div className="flex-1 pt-2 w-[200px]">
              <h3 className="text-xl font-bold mb-1">Ronjohnson Owuor</h3>
              <p className="text-lightText text-sm dark:text-darkText">@jamestxs9900</p>
              <p className="text-lightText dark:text-darkText text-sm">joined 12.12.2024</p>
              <div className="flex gap-2 items-center justify-items-start rounded-md text-sm w-[150px] mt-1 text-mainColor ">
              <FiUserPlus /> <span>80K followers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100px] rounded-md  grid grid-cols-3 place-content-center gap-4">
          <div className="w-full h-full p-4 flex items-center flex-col justify-center gap-2 border border-lightBg dark:border-darkBg hover:border-mainColor rounded-md">
            <h1 className="text-md text-center"><LuBookOpenCheck className="text-mainColor text-[40px] font-bold" /> 20K</h1>
            <span className="font-bold text-md">books read</span>
          </div>
          <div className="w-full h-full p-4 flex items-center flex-col justify-center gap-2 border border-lightBg dark:border-darkBg hover:border-mainColor rounded-md">
              <h1 className="text-center"><AiOutlineHighlight className="text-mainColor text-[40px] font-bold" /> 10K</h1>
              <span className="font-bold text-md">highlight</span>
          </div>
          <div className="w-full h-full p-4 flex items-center flex-col justify-center gap-2 border border-lightBg dark:border-darkBg hover:border-mainColor rounded-md">
            <h1 className="text-md text-center"><BiUpvote className="text-mainColor text-[40px] font-bold" />111</h1>
            <span className="font-bold text-md">upvotes</span>
          </div>
          <div className="w-full h-full p-4 flex items-center flex-col justify-center gap-2 border border-lightBg dark:border-darkBg hover:border-mainColor rounded-md">
            <h1 className="text-md text-center"><FaRegBookmark  className="text-mainColor text-[40px] font-bold" />50K</h1>
            <span className="font-bold text-md">bookmarks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;