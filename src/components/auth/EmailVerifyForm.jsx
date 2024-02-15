import React, { useState } from "react";
import CommonBtn from "../common/CommonBtn";
import { Eye2icon, Eyeicon, Passwordicon } from "../common/icon";

const EmailVerifyForm = () => {
  const [pass, setPass] = useState(false);
  const [password, setPassword] = useState(false);

  const specialcharacter = "~!@#$%^&*()_-+={[}]|:;”’<,>.?/";
  return (
    <>
      <div className="max-w-[423px] w-full mx-auto p-2 py-10 2xl:p-7 rounded-[20px] flex justify-center  items-center bg-white ">
        <div className="px-3 overflow-auto ">
          <form>
            <div>
              <h1 className="font-bold text-[24px] text-secondary  leading-[32px]">
                Verify It’s You
              </h1>
              <p className="text-tertiary text-[16px] font-normal leading-[24px] mt-[7px]">
                We have sent you a code to ( jh***@mail.com ). Enter it here to
                verify your identity
              </p>
            </div>

            <div className="flex items-center justify-between my-5">
              <input
                type="number"
                maxLength={1}
                autoFocus
                className="bg-[#22272B]/10 w-16 h-16 lg:w-20 lg:h-20 rounded-xl text-black focus:border-primary focus:bg-primary/10 font-bold text-xl lg:text-2xl text-center"
              />
              <input
                type="number"
                maxLength={1}
                className="bg-[#22272B]/10 w-16 h-16 lg:w-20 lg:h-20 rounded-xl text-black focus:border-primary focus:bg-primary/10 font-bold text-xl lg:text-2xl text-center"
              />
              <input
                type="number"
                maxLength={1}
                className="bg-[#22272B]/10 w-16 h-16 lg:w-20 lg:h-20 rounded-xl text-black focus:border-primary focus:bg-primary/10 font-bold text-xl lg:text-2xl text-center"
              />
              <input
                type="number"
                maxLength={1}
                className="bg-[#22272B]/10 w-16 h-16 lg:w-20 lg:h-20 rounded-xl text-black focus:border-primary focus:bg-primary/10 font-bold text-xl lg:text-2xl text-center"
              />
            </div>

            <p className="text-primary text-center text-base">
              Resend Code (5min)
            </p>
            <div className="w-full rounded-[8px] border flex items-center gap-3 pr-3 border-quaternary py-3 pl-4 mt-[24px]">
              <span>
                <Passwordicon />
              </span>
              <input
                className="outline-none w-full "
                type={`${pass ? "text" : "password"}`}
                placeholder="Password"
                required
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
                required
              />
              <span
                onClick={() => setPassword(!pass)}
                className=" cursor-pointer"
              >
                {password ? <Eye2icon /> : <Eyeicon />}
              </span>
            </div>

            <div className="my-4">
              <CommonBtn title={"Sign Up"} />
            </div>
            <p className="text-secondary text-sm font-semibold mb-2">
              Password Must Contain:
            </p>
            <ul className="space-y-1 list-disc pl-4">
              <li className="text-black/65 text-xs font-normal">
                Minimum of 8 characters
              </li>
              <li className="text-black/65 text-xs font-normal">
                Include at least one lowercase (a-z)
              </li>
              <li className="text-black/65 text-xs font-normal">
                Include at least one Uppercase (A-Z)
              </li>
              <li className="text-black/65 text-xs font-normal">
                Include at least one Number (0-9)
              </li>
              <li className="text-black/65 text-xs font-normal">
                Include at least one Number (0-9) <br /> {specialcharacter}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailVerifyForm;
