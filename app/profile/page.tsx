"use client";
import Articles from "@/components/Articles";
import Mainfeature from "@/components/Mainfeature";
import Navigation from "@/components/Navigation";
import Profileactions from "@/components/Profileactions";
import Profileedit from "@/components/Profileedit";
import api from "@/helpers/api";
import date_joined from "@/helpers/dateformatter";
import useToken from "@/helpers/useToken";
import { userData } from "@/interfaces/accounts.interface";
import React, { useEffect } from "react";
import { AiOutlineHighlight } from "react-icons/ai";
import { BiUpvote } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { LuBookOpenCheck } from "react-icons/lu";

const Page = async () => {
  const { isToken, decrypted } = useToken();
  useEffect(() => {
    if (!isToken ) {
      window.location.href = "/accounts/login";
      return;
    }
    console.log(decrypted);
  }, [isToken]);


  const generateProfileUrl =  (style: string, flip: boolean) => {
    const seed = Math.random().toString(36).substring(2, 15);
    return `https://api.dicebear.com/9.x/${style}/svg?seed=${seed}&flip=${flip}`;
  };

  const profile_image = generateProfileUrl("adventurer-neutral", false);
  const user:userData =  await api.post("/users-api/check-user-profile", {profile_image}, {
    headers: {
      Authorization: `Bearer ${decrypted}`,
    },
  }).then(data => data.data);

  const joined = date_joined(user.user.createdAt);
  const expiry = date_joined(user.user_data.expiry_date);

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
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-lightBg dark:bg-darkBg">
                <img
                  src={user.user.profile_url}
                  className="w-full h-full object-cover"
                  alt="avatar"
                />
              </div>
            </div>

            {/* User Details Section */}
            <div className="flex-1 pt-2 w-[200px]">
              <h3 className="text-xl font-bold mb-1">{user.user.username}</h3>
              <p className="text-lightText text-sm dark:text-darkText">
                {user.user_data.nickname}
              </p>
              <p className="text-lightText dark:text-darkText text-sm">
                {joined}
              </p>
              <p className="text-sm bg-green-100 dark:bg-secondaryGreen dark:text-white text-[11px] p-1 my-2 rounded-md w-24 text-center">
                {user.user_data.tier == 0 ? "free tier" :user.user_data.tier == 1 ? 'montly tier':'lifetime'}
              </p>
              <div className="flex gap-2 items-center justify-items-start rounded-md text-sm w-[150px] mt-1 text-mainColor ">
                <FiUserPlus /> <span>80K followers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100px] rounded-md  grid grid-cols-3 place-content-center gap-4">
          <div className="w-full h-full p-4 flex items-center flex-col justify-center gap-2 border border-lightBg dark:border-darkBg hover:border-mainColor rounded-md">
            <h1 className="text-md text-center">
              <LuBookOpenCheck className="text-mainColor text-[40px] font-bold" />{" "}
              20K
            </h1>
            <span className="font-bold text-md">books read</span>
          </div>
          <div className="w-full h-full p-4 flex items-center flex-col justify-center gap-2 border border-lightBg dark:border-darkBg hover:border-mainColor rounded-md">
            <h1 className="text-center">
              <AiOutlineHighlight className="text-mainColor text-[40px] font-bold" />{" "}
              10K
            </h1>
            <span className="font-bold text-md">highlight</span>
          </div>
          <div className="w-full h-full p-4 flex items-center flex-col justify-center gap-2 border border-lightBg dark:border-darkBg hover:border-mainColor rounded-md">
            <h1 className="text-md text-center">
              <BiUpvote className="text-mainColor text-[40px] font-bold" />
              111
            </h1>
            <span className="font-bold text-md">upvotes</span>
          </div>
          <div className="w-full h-full p-4 flex items-center flex-col justify-center gap-2 border border-lightBg dark:border-darkBg hover:border-mainColor rounded-md">
            <h1 className="text-md text-center">
              <FaRegBookmark className="text-mainColor text-[40px] font-bold" />
              50K
            </h1>
            <span className="font-bold text-md">bookmarks</span>
          </div>
        </div>
      </div>
      <Profileactions expiry={expiry} email_verified={user.user.email_verified} />
      <Mainfeature />
      <Articles />
      {/* <Profileedit/> */}
    </div>
  );
};

export default Page;
