"use client";
import React from 'react';

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-lightBg px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-lightText  mb-6">Log in</h2>
        
        <form className="space-y-4">          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-lightText">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md text-lightText focus:ring-maincolor focus:border-maincolor"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-lightText">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md text-lightText focus:ring-maincolor focus:border-maincolor"
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
          <p className="text-sm text-lightText">Or log in  with</p>
        </div>

        <button
          type="button"
          className="w-full mt-2 py-2 px-4 bg-white text-maincolor border border-maincolor rounded-md hover:bg-maincolor  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maincolor"
        >
          Google
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-lightText">
            don't  have an account? <a href="/accounts" className="text-mainColor hover:underline">sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
