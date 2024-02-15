import React, { useState } from "react";
import { Eye2icon, Eyeicon, Passwordicon, Usericon } from "../common/icon";
import { Link } from "react-router-dom";
import Administrator from "./Administrator";
import CommonBtn from "../common/CommonBtn";

const SignInForm = () => {
  const [pass, setPass] = useState(false);

  return (
    <>
      <div className="lg:p-10 px-5 py-10 rounded-[20px] bg-white max-w-[423px] w-full ">
        <form action="">
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-secondary text-[24px] font-bold leading-[32px]">
              Sign In
            </h2>
            <p className="text-tertiary text-[16px] font-normal leading-[24px]">
              Welcome, sign into your account
            </p>
          </div>
          <div className="flex w-full flex-col mt-6 gap-4">
            <Administrator />

            <div className="w-full rounded-[8px] mt-2 border flex items-center gap-3 pr-1 border-quaternary py-3 pl-4">
              <span>
                <Usericon />
              </span>
              <input
                className="outline-none w-full"
                type="text"
                placeholder="User Name"
                required
              />
            </div>
            <div className="w-full rounded-[8px] border flex items-center gap-3 pr-3 border-quaternary py-3 pl-4">
              <span>
                <Passwordicon />
              </span>
              <input
                className="outline-none w-full"
                type={`${pass ? "text" : "password"}`}
                placeholder="Password"
                required
              />
              <span onClick={() => setPass(!pass)} className="cursor-pointer">
                {pass ? <Eye2icon /> : <Eyeicon />}
              </span>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-between mt-3">
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                id="remember"
                className="yes cursor-pointer"
                required
              />
              <label
                htmlFor="remember"
                className="text-secondary cursor-pointer text-[14px] sm:text-[16px] font-normal leading-[24px]"
              >
                Remember me
              </label>
            </div>
            <Link
              to={`/forgot-password`}
              className="text-primary hover:text-primary/50 transition duration-300 ease-in-out text-[14px] sm:text-[16px] font-bold leading-[24px]"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-8">
            <CommonBtn title="Sign In" />
          </div>
          <p className="text-nouveau text-center text-[16px] mt-6 font-normal leading-[24px]">
            Don’t have an account?{" "}
            <Link
              to={`/signup`}
              className="text-primary transition duration-300 ease-in-out hover:text-primary/50 leading-6 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
