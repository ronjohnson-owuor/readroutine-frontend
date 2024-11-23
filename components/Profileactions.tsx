import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

interface prop {
  email_verified: boolean;
}
function Profileactions({ email_verified }: prop) {
  return (
    <div className="w-[80%] min-h-[100px] p-4 bg-lightFg dark:bg-darkFg rounded-md mt-2 mx-auto">
      <h1 className="font-bold my-2 mb-1">action panel</h1>
      <p className="text-mainColor text-[12px] my-1">
        free tier ends on: 12.12.2025
      </p>
      <div className="grid grid-cols-6 mt-2  w-full h-[60px]">
        <button className="w-[150px]  bg-lightBg dark:bg-darkBg text-sm flex items-center justify-center gap-2 rounded-md transition-all hover:border-mainColor hover:border h-[40px]">
          <IoAdd /> <span>add book</span>
        </button>
        <button className="w-[150px]  bg-lightBg dark:bg-darkBg text-sm flex items-center justify-center gap-2 rounded-md transition-all hover:border-mainColor hover:border h-[40px]">
          <IoAdd /> <span>add highlight</span>
        </button>
        <button className="w-[150px]  bg-lightBg dark:bg-darkBg text-sm flex items-center justify-center gap-2 rounded-md transition-all hover:border-mainColor hover:border h-[40px]">
          <CiEdit className="text-lg" />
          <span>edit profile</span>
        </button>
        {!email_verified && <button className="w-[150px]  bg-red-600 text-white animate-pulse text-sm flex items-center justify-center gap-2 rounded-md transition-all hover:border-mainColor hover:border h-[40px]">
          <MdOutlineMarkEmailUnread className="text-lg" />
          <span>veryfy your email</span>
        </button>}
      </div>
    </div>
  );
}

export default Profileactions;
