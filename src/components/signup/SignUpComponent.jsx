import React, { useState } from "react";
import Datepicker from "../common/Datepicker";
import { Eye2icon, Eyeicon, Passwordicon } from "../common/icon";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Administrator from "../signin/Administrator";

const SignUpComponent = () => {
  const [pass, setPass] = useState(false);
  const [password, setPassword] = useState(false);

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
              Hello!
            </h1>
            <p className="text-[#EBEBEB] text-[16px] font-normal leading-[24px]">
              Welcome to Hypernance
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-[50%]  relative w-full h-full  mx-auto flex justify-center  items-center max-md:mt-[-247px] p-5">
        <div className="max-w-[423px]  w-full mx-auto h-[90%] p-2 py-10 2xl:p-7    rounded-[20px] flex justify-center  items-center bg-white ">
          <div className="md:h-full px-3   2xl:h-full flex 2xl:items-center overflow-auto ">
            <form action="">
              <div>
                {" "}
                <h1 className="font-bold text-[24px] text-[#040707]  leading-[32px] ">
                  Sign Up
                </h1>
                <p className="text-[#585C67] text-[16px] font-normal leading-[24px] mt-[7px]">
                  Welcome, let’s get you started!
                </p>
              </div>
              <div className="mt-6 flex  justify-between gap-2">
                <div className="max-w-[162px] w-full ">
                  <label
                    htmlFor=""
                    className=" text-[#040707] text-[13px] font-medium "
                  >
                    First Name
                  </label>
                  <input
                    className="w-full py-[12px] px-[20px] outline-none font-normal border border-[#D2D3D6] rounded-[8px] mt-[8px] placeholder:text-[13px] leading-[24px]"
                    type="text"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="max-w-[162px] w-full ">
                  <label
                    htmlFor=""
                    className=" text-[#040707] text-[13px] font-medium "
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full py-[12px] px-[20px] outline-none font-normal border border-[#D2D3D6] rounded-[8px] mt-[8px] text-[13px] leading-[24px]"
                    type="text"
                    placeholder="Last First Name"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className=" text-[#040707] text-[13px] font-medium "
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full py-[12px] px-[20px] outline-none font-normal border border-[#D2D3D6] rounded-[8px] mt-[8px] placeholder:text-[13px] leading-[24px]"
                />
              </div>
              <div>
                <Datepicker />
              </div>
              <div className="flex gap-2 mt-4 flex-col">
                <label
                  htmlFor=""
                  className="text-[#040707] text-[13px] font-medium"
                >
                  Assign Role
                </label>
                <Administrator />
              </div>
              <div className="w-full rounded-[8px] border flex items-center gap-3 pr-3 border-[#D2D3D6] py-3 pl-4 mt-[24px]">
                <span>
                  <Passwordicon />
                </span>
                <input
                  className=" outline-none w-full "
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
              <div className="w-full rounded-[8px] border flex items-center gap-3 pr-3 border-[#D2D3D6] py-3 pl-4 mt-4">
                <span>
                  <Passwordicon />
                </span>
                <input
                  className=" outline-none w-full"
                  type={`${password ? "text" : "password"}`}
                  placeholder="Confirm Password"
                />
                <span
                  onClick={() => setPassword(!pass)}
                  className=" cursor-pointer"
                >
                  {password ? <Eye2icon /> : <Eyeicon />}
                </span>
              </div>
              <div className="flex w-full flex-wrap justify-between mt-3">
                <div className="flex gap-3 w-full ">
                  <div>
                    <input
                      type="radio"
                      name=""
                      id="remember"
                      className="yes !w-4 cursor-pointer rounded-[50%] !h-4 "
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="text-[#040707] cursor-pointer text-[14px] sm:text-[16px] font-normal leading-[24px]"
                  >
                    By tapping Apply you agree and consent to our{" "}
                    <Link
                      to={`#`}
                      className="text-[#FF4CFF] hover:text-[#FF4CFF]/50 transition duration-300 ease-in-out underline"
                    >
                      Terms of Service{" "}
                    </Link>
                    and{" "}
                    <Link
                      to={`#`}
                      className="text-[#FF4CFF] hover:text-[#FF4CFF]/50 transition duration-300 ease-in-out underline"
                    >
                      {" "}
                      Privacy policy
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white text-[16px] font-bold leading-[24px] w-full p-4 mt-8 bg-[#FF4CFF] border border-[#FF4CFF] hover:bg-transparent hover:text-[#FF4CFF] transition duration-300 ease-in-out rounded-[8px]"
              >
                Sign Up
              </button>
              <p className="text-[#6B7280] text-center text-[16px] mt-6 font-normal leading-[24px]">
                Already have an account?{" "}
                <Link
                  to={`/signin`}
                  className="text-[#FF4CFF] transition duration-300 ease-in-out hover:text-[#FF4CFF]/50 font-semibold"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
