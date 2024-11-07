"use client";
import React from 'react';
import { IoLogoGoogle } from 'react-icons/io5';

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen        text-lightText  dark:text-darkText  dark:text-darkText px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full     dark:text-darkText  dark:bg-darkFg shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center  text-lightText  dark:text-darkText  mb-6">Log in</h2>
        
        <form className="space-y-4">          
          <div>
            <label htmlFor="email" className="block text-sm font-medium    text-lightText  dark:text-darkText">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md    text-lightText  dark:text-darkText focus:ring-maincolor focus:border-lightFg dark:border-darkFg"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium    text-lightText  dark:text-darkText">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md    text-lightText  dark:text-darkText focus:ring-maincolor focus:border-lightFg dark:border-darkFg"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-mainColor text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maincolor"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <p className="text-sm    text-lightText  dark:text-darkText">Or log in  with</p>
        </div>

        <button
        type="button"
        className="w-full mt-2 py-2 px-4 bg-gradient-to-r from-[#34a853] via-[#fbbc05] to-[#ea4335] text-white font-semibold rounded-md border border-lightFg dark:border-darkFg hover:from-[#4285f4] hover:via-[#fbbc05] hover:to-[#ea4335] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285f4] shadow-md flex items-center justify-center"
      >
        <IoLogoGoogle/> &nbsp; sign in with google
      </button>

        <div className="mt-4 text-center">
          <p className="text-sm    text-lightText  dark:text-darkText">
            don't  have an account? <a href="/accounts" className="text-mainColor hover:underline">sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
