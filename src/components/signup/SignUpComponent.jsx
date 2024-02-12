import React, { useState } from "react";
import Datepicker from "../common/Datepicker";
import { Eye2icon, Eyeicon, Passwordicon } from "../common/icon";
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";

const SignUpComponent = () => {
  const [pass, setPass] = useState(false);
  return (
    <div className="w-full max-w-[1920px] mx-auto h-screen flex md:flex-row flex-col bg-[#F7F7F7]">
      <div className="md:w-[50%] w-full h-[60%] md:h-full mx-auto bg_color flex  justify-center p-10 md:items-center">
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
      <div className="md:w-[50%]  relative w-full h-[40%] md:h-full mx-auto flex justify-center  items-center  p-5">
        <div className="max-w-[423px] overflow-auto w-full mx-auto p-5 lg:p-10 rounded-[20px] bg-white ">
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
            <div className="mt-[24px] flex justify-between gap-2">
              <div className="w-[162px] ">
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
              <div className="w-[162px] ">
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
            <div className="mt-[16px]">
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
            <div className="w-full rounded-[8px] border flex items-center gap-3 pr-3 border-[#D2D3D6] py-3 pl-4 mt-[24px]">
              <span>
                <Passwordicon />
              </span>
              <input
                className=" outline-none w-full "
                type={`${pass ? "text" : "password"}`}
                placeholder="Password"
              />
              <span onClick={() => setPass(!pass)} className=" cursor-pointer">
                {pass ? <Eye2icon /> : <Eyeicon />}
              </span>
            </div>
            <div className="w-full rounded-[8px] border flex items-center gap-3 pr-3 border-[#D2D3D6] py-3 pl-4 mt-4">
              <span>
                <Passwordicon />
              </span>
              <input
                className=" outline-none w-full"
                type={`${pass ? "text" : "password"}`}
                placeholder="Confirm Password"
              />
              <span onClick={() => setPass(!pass)} className=" cursor-pointer">
                {pass ? <Eye2icon /> : <Eyeicon />}
              </span>
            </div>
            <div className="flex w-full flex-wrap justify-between mt-3">
              <div className="flex gap-3 w-full ">
                <input
                  type="radio"
                  name=""
                  id="remember"
                  className="yes !w-[20px] "
                />
                <label
                  htmlFor="remember"
                  className="text-[#040707] text-[14px] sm:text-[16px] font-normal leading-[24px]"
                >
                  By tapping Apply you agree and consent to our{" "}
                  <span className="text-[#FF4CFF] underline">
                    Terms of Service
                  </span>
                  and{" "}
                  <span className="text-[#FF4CFF] underline">
                    {" "}
                    Privacy policy
                  </span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white text-[16px] font-bold leading-[24px] w-full p-4 mt-8 bg-[#FF4CFF] rounded-[8px]"
            >
              Sign Up
            </button>
            <p className="text-[#6B7280] text-center text-[16px] mt-6 font-normal leading-[24px]">
              Already have an account?{" "}
              <Link to={`/signin`} className="text-[#FF4CFF] font-semibold">
                SignIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
