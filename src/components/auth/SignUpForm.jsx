import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import Datepicker from "../common/Datepicker";
import { Eye2icon, Eyeicon, Passwordicon } from "../common/icon";
import Administrator from "./Administrator";

const SignUpForm = () => {
  const [pass, setPass] = useState(false);
  const [password, setPassword] = useState(false);
  return (
    <>
      <div className="max-w-[423px] w-full mx-auto h-[96%] p-2 py-10 2xl:p-7    rounded-[20px] flex justify-center  items-center bg-white ">
        <div className="md:h-full px-3 overflow-auto ">
          <form>
            <div>
              <h1 className="font-bold text-[24px] text-secondary  leading-[32px] ">
                Sign Up
              </h1>
              <p className="text-tertiary text-[16px] font-normal leading-[24px] mt-[7px]">
                Welcome, let’s get you started!
              </p>
            </div>
            <div className="mt-6 flex justify-between gap-2">
              <div className="max-w-[162px] w-full ">
                <label
                  htmlFor="first-name"
                  className="text-secondary text-[13px] font-medium "
                >
                  First Name
                </label>
                <input
                  required
                  name="first-name"
                  className="w-full py-[12px] px-[20px] outline-none font-normal border border-quaternary rounded-[8px] mt-[8px] placeholder:text-[13px] leading-[24px]"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="max-w-[162px] w-full ">
                <label
                  htmlFor="last-name"
                  className="text-secondary text-[13px] font-medium "
                >
                  Last Name
                </label>
                <input
                  required
                  name="last-name"
                  className="w-full py-[12px] px-[20px] outline-none font-normal border border-quaternary rounded-[8px] mt-[8px] text-[13px] leading-[24px]"
                  type="text"
                  placeholder="Last First Name"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="Address"
                className="text-secondary text-[13px] font-medium "
              >
                Address
              </label>
              <input
                name="Address"
                type="text"
                placeholder="Address"
                className="w-full py-[12px] px-[20px] outline-none font-normal border border-quaternary rounded-[8px] mt-[8px] placeholder:text-[13px] leading-[24px]"
              />
            </div>
            <div>
              <Datepicker />
            </div>
            <div className="flex gap-2 mt-4 flex-col">
              <label
                htmlFor="assign-role"
                className="text-secondary text-[13px] font-medium"
              >
                Assign Role
              </label>
              <Administrator />
            </div>
            <div className="w-full rounded-[8px] border flex items-center gap-3 pr-3 border-quaternary py-3 pl-4 mt-[24px]">
              <span>
                <Passwordicon />
              </span>
              <input
                className="outline-none w-full "
                type={`${pass ? "text" : "password"}`}
                placeholder="Password"
              />
              <span onClick={() => setPass(!pass)} className="cursor-pointer">
                {pass ? <Eye2icon /> : <Eyeicon />}
              </span>
            </div>
            <div className="w-full rounded-[8px] border flex items-center gap-3 pr-3 border-quaternary py-3 pl-4 mt-4">
              <span>
                <Passwordicon />
              </span>
              <input
                className="outline-none w-full"
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
                  className="text-secondary cursor-pointer text-[14px] sm:text-[16px] font-normal leading-[24px]"
                >
                  By tapping Apply you agree and consent to our{" "}
                  <Link
                    to={`#`}
                    className="text-primary hover:text-primary/50 transition duration-300 ease-in-out underline"
                  >
                    Terms of Service{" "}
                  </Link>
                  and{" "}
                  <Link
                    to={`#`}
                    className="text-primary hover:text-primary/50 transition duration-300 ease-in-out underline"
                  >
                    {" "}
                    Privacy policy
                  </Link>
                </label>
              </div>
            </div>

            <div className="mt-8">
              <CommonBtn title={"Sign Up"} />
            </div>
            <p className="text-nouveau text-center text-[16px] mt-6 font-normal leading-[24px]">
              Already have an account?{" "}
              <Link
                to={`/signin`}
                className="text-primary transition duration-300 ease-in-out hover:text-primary/50 font-semibold"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
