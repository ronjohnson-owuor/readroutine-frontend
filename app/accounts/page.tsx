"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import api from "@/helpers/api";
import Emojitoast from "@/helpers/Emojitoast";
import {
  normalSignupObject,
  signupmessage,
} from "@/interfaces/accounts.interface";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoLogoGoogle } from "react-icons/io5";
import useToken from "@/helpers/useToken";

function Page() {
  const { data: session } = useSession();
  const { isToken, encryptToken } = useToken();
  useEffect(() => {
    if (!isToken) {
      if (session?.token == null) {
        toast(<Emojitoast emoji="😔" message={session?.message!} />);
        return;
      }
      const success = encryptToken(session.token);
      window.location.href = "/profile";
      success && toast(<Emojitoast emoji="🥳" message={session?.message!} />);
    }else{
      window.location.href = "/profile";
    }
  }, [session]);

  const [normal, setNormal] = useState<normalSignupObject>({
    username: "",
    password: "",
    email: "",
  });
  const [agreed, setAgreed] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNormal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const normalSignin = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast(
        <Emojitoast emoji="⛔" message="agree to the terms and conditions" />
      );
      return;
    }

    try {
      const response: signupmessage = (
        await api.post("/users-api/normal-signin", normal)
      ).data;
      if (response.proceed) {
        encryptToken(response.token!);
        window.location.href = "/profile";
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
    <div className="flex items-center justify-center min-h-screen bg-lightBg dark:bg-darkBg text-lightText  dark:text-darkText  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-lightFg dark:bg-darkFg shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center   mb-6">Sign Up</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium ">
              Name
            </label>
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              id="name"
              name="username"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md  focus:ring-maincolor focus:border-lightFg dark:border-darkFg"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              onChange={(e) => handleInputChange(e)}
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md  focus:ring-maincolor focus:border-lightFg dark:border-darkFg"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              onChange={(e) => handleInputChange(e)}
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md  focus:ring-maincolor focus:border-lightFg dark:border-darkFg"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              onChange={() => setAgreed(!agreed)}
              checked={agreed}
              required
              className="h-4 w-4 text-maincolor focus:ring-maincolor border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm ">
              By checking, you agree to our{" "}
              <a href="#" className="text-maincolor hover:underline">
                terms and conditions
              </a>
              .
            </label>
          </div>

          <button
            onClick={(e) => normalSignin(e)}
            type="submit"
            className="w-full py-2 px-4 bg-mainColor text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maincolor"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <p className="text-sm ">Or sign in with</p>
        </div>

        <button
          onClick={() => {
            if (!agreed) {
              toast(
                <Emojitoast
                  emoji="⛔"
                  message="agree to the terms and conditions"
                />
              );
              return;
            }
            signIn("google");
          }}
          type="button"
          className="w-full mt-2 py-2 px-4 bg-gradient-to-r from-[#34a853] via-[#fbbc05] to-[#ea4335] text-white font-semibold rounded-md border border-lightFg dark:border-darkFg hover:from-[#4285f4] hover:via-[#fbbc05] hover:to-[#ea4335] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285f4] shadow-md flex items-center justify-center"
        >
          <IoLogoGoogle /> &nbsp; sign in with google
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm ">
            Already have an account?{" "}
            <a
              href="/accounts/login"
              className="text-mainColor hover:underline"
            >
              log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
