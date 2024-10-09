import React from "react";
import DarkBtn from "../Button/DarkBtn";

function SignIn() {
  return (
    <div
      className="min-h-screen flex items-center font-poppins justify-center bg-orange-color"
      id="sign-in"
    >
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-Inter font-bold text-center text-heading mb-8">
          Sign In
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-color focus:border-blue-color"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-color focus:border-blue-color"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-color hover:underline">
              Forgot password?
            </a>
          </div>

          <DarkBtn className="w-full">Sign In</DarkBtn>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="#sign-up" className="text-blue-color hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
