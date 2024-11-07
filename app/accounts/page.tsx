"use client";
import React from 'react';
import { IoLogoGoogle } from 'react-icons/io5';

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lightBg dark:bg-darkBg text-lightText  dark:text-darkText  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-lightFg dark:bg-darkFg shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center   mb-6">Sign Up</h2>
        <form autoComplete='off'  className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium ">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md  focus:ring-maincolor focus:border-lightFg dark:border-darkFg"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium ">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md  focus:ring-maincolor focus:border-lightFg dark:border-darkFg"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
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
              required
              className="h-4 w-4 text-maincolor focus:ring-maincolor border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm ">
              By checking, you agree to our <a href="#" className="text-maincolor hover:underline">terms and conditions</a>.
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-mainColor text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maincolor"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <p className="text-sm ">Or sign in with</p>
        </div>

      <button
        type="button"
        className="w-full mt-2 py-2 px-4 bg-gradient-to-r from-[#34a853] via-[#fbbc05] to-[#ea4335] text-white font-semibold rounded-md border border-lightFg dark:border-darkFg hover:from-[#4285f4] hover:via-[#fbbc05] hover:to-[#ea4335] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285f4] shadow-md flex items-center justify-center"
      >
        <IoLogoGoogle/> &nbsp; sign in with google
      </button>


        <div className="mt-4 text-center">
          <p className="text-sm ">
            Already have an account? <a href="/accounts/login" className="text-mainColor hover:underline">log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
