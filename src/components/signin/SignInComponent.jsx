import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { Eye2icon, Eyeicon, Passwordicon, Usericon } from "../common/icon";
import { Link } from "react-router-dom";
const SignInComponent = () => {
  const [pass, setPass] = useState(false);
  return (
    <div className="w-full max-w-[1920px] mx-auto md:h-screen flex md:flex-row flex-col bg-[#F7F7F7]">
      <div className="md:w-[50%] w-full h-[575px] md:h-full mx-auto bg_color flex  justify-center p-10 md:items-center">
        <div className="flex flex-col gap-3 md:gap-[63px] ">
          <img
            className="md:max-w-[438px] max-w-[179px] w-full"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-col text-center gap-[7px]">
            <h1 className="text-white text-[48px] font-bold leading-[58px]">
              Hi!{" "}
            </h1>
            <p className="text-[#EBEBEB] text-[16px] font-normal leading-[24px]">
              Welcome to Hypernance
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] w-full  md:h-full mx-auto flex justify-center items-center p-5">
        <div className="lg:p-10 px-5 py-10 rounded-[20px] bg-white max-w-[423px] w-full max-md:translate-y-[-140px]">
          <form action="">
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[#040707] text-[24px] font-bold leading-[32px]">
                Sign In
              </h2>
              <p className="text-[#585C67] text-[16px] font-normal leading-[24px]">
                Welcome, sign into your account
              </p>
            </div>
            <div className="flex w-full flex-col mt-9 gap-4">
              <div className="w-full rounded-[8px] border flex items-center gap-3 pr-1 border-[#D2D3D6] py-3 pl-4">
                <span>
                  <Usericon />
                </span>
                <input
                  className=" outline-none w-full"
                  type="text"
                  placeholder="User Name"
                />
              </div>
              <div className="w-full rounded-[8px] border flex items-center gap-3 pr-3 border-[#D2D3D6] py-3 pl-4">
                <span>
                  <Passwordicon />
                </span>
                <input
                  className=" outline-none w-full"
                  type={`${pass ? "text" : "password"}`}
                  placeholder="Password"
                />
                <span
                  onClick={() => setPass(!pass)}
                  className=" cursor-pointer"
                >
                  {pass ? <Eye2icon /> : <Eyeicon />}
                </span>
              </div>
            </div>
            <div className="flex w-full flex-wrap justify-between mt-3">
              <div className="flex gap-3 items-center">
                <input type="radio" name="" id="remember" className="yes" />
                <label
                  htmlFor="remember"
                  className="text-[#040707] text-[14px] sm:text-[16px] font-normal leading-[24px]"
                >
                  Remember me
                </label>
              </div>
              <Link
                to={`#`}
                className="text-[#FF4CFF] text-[14px] sm:text-[16px] font-bold leading-[24px]"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="text-white text-[16px] font-bold leading-[24px] w-full p-4 mt-8 bg-[#FF4CFF] rounded-[8px]"
            >
              Sign In
            </button>
            <p className="text-[#6B7280] text-center text-[16px] mt-6 font-normal leading-[24px]">
              Don’t have an account?{" "}
              <Link to={`/signup`} className="text-[#FF4CFF] font-semibold">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
