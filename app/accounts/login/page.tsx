"use client";
import api from "@/helpers/api";
import Emojitoast from "@/helpers/Emojitoast";
import useToken from "@/helpers/useToken";
import { normalLogin, signupmessage } from "@/interfaces/accounts.interface";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoLogoGoogle } from "react-icons/io5";

function Page() {
  const { encryptToken, isToken } = useToken();
  const [normal, setNormal] = useState<normalLogin>({
    password: "",
    email: "",
  });

  const { data: session } = useSession();
  useEffect(() => {
    if (!isToken) {
      if (session?.token == null) {
        toast(<Emojitoast emoji="😔" message={session?.message!} />);
        return;
      }
      const success = encryptToken(session.token);
      if(success) {
        toast(<Emojitoast emoji="🥳" message={session?.message!} />);
        window.location.href="/profile"
      };
    }else{
      window.location.href = "/profile";
    }
  }, [session]);

  const normal_login = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response: signupmessage = (
        await api.post("/users-api/normal-login", normal)
      ).data;
      if (response.proceed) {
        encryptToken(response.token!);
        window.location.href="/profile";
        toast(<Emojitoast emoji="🎉" message={response.message} />);
      } else {
        toast(<Emojitoast emoji="🚫" message={response.message} />);
      }
      console.log(response);
    } catch (error) {
      console.log(`there was an error ${error}`);
      toast(
        <Emojitoast
          emoji="🛠️"
          message={`error on our side we are trying to fix it.try again later ${error}`}
        />
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen        text-lightText  dark:text-darkText  dark:text-darkText px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full     dark:text-darkText  dark:bg-darkFg shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center  text-lightText  dark:text-darkText  mb-6">
          Log in
        </h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium    text-lightText  dark:text-darkText"
            >
              Email
            </label>
            <input
              onChange={(e) =>
                setNormal((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md    text-lightText  dark:text-darkText focus:ring-maincolor focus:border-lightFg dark:border-darkFg"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium    text-lightText  dark:text-darkText"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setNormal((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md    text-lightText  dark:text-darkText focus:ring-maincolor focus:border-lightFg dark:border-darkFg"
            />
          </div>

          <button
            onClick={(e) => normal_login(e)}
            type="submit"
            className="w-full py-2 px-4 bg-mainColor text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maincolor"
          >
            login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <p className="text-sm    text-lightText  dark:text-darkText">
            Or log in with
          </p>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            signIn("google");
          }}
          type="button"
          className="w-full mt-2 py-2 px-4 bg-gradient-to-r from-[#34a853] via-[#fbbc05] to-[#ea4335] text-white font-semibold rounded-md border border-lightFg dark:border-darkFg hover:from-[#4285f4] hover:via-[#fbbc05] hover:to-[#ea4335] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285f4] shadow-md flex items-center justify-center"
        >
          <IoLogoGoogle /> &nbsp; log in google
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm    text-lightText  dark:text-darkText">
            don't have an account?{" "}
            <a href="/accounts" className="text-mainColor hover:underline">
              sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
