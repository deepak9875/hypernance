import React from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import { EmailIcon } from "../common/icon";

const ForgotPasswordForm = () => {
  return (
    <>
      <div className="lg:p-10 px-5 py-10 rounded-[20px] bg-white max-w-[423px] w-full ">
        <form>
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-secondary text-[24px] font-bold leading-[32px]">
              Forgot Password?
            </h2>
            <p className="text-tertiary text-[16px] font-normal leading-[24px]">
              Enter your registered email below to receive password instructions
            </p>
          </div>
          <div className="flex w-full flex-col mt-6 gap-4">
            <div className="w-full rounded-[8px] mt-2 border flex items-center gap-3 pr-1 border-quaternary py-3 pl-4">
              <span>
                <EmailIcon />
              </span>
              <input
                required
                className="outline-none w-full"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="mt-4">
            <CommonBtn title="Send me email" />
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

export default ForgotPasswordForm;
