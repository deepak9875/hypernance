import React, { useState } from "react";
import profileImg from "../../assets/img/profile2.png";
import profileImg2 from "../../assets/img/profile1.png";

import img from "../../assets/img/manplaceholder.png";
import flag from "../../assets/img/flag.png";
import visa from "../../assets/img/visa-img.png";
import { Flag2Icon } from "../common/icon";
import Profile from "./Profile";
import SendMoneyDropdown from "./SendMoneyDropdown";
import QuickTransferDropdown from "./QuickTransferDropdown";

const PaymentCard = () => {
  const [inputvalue, setInputvalue] = useState("12,4");
  const [inputvalue2, setInputvalue2] = useState(" 12.4");
  const handlechange = (event) => {
    setInputvalue(event.target.value);
  };
  const handlechange2 = (event) => {
    setInputvalue2(event.target.value);
  };
  return (
    <div className="bg-[#F7F7F7] max-w-[378px] pr-1 h-[82%] overflow-auto">
      <div className=" w-full mx-auto max-sm:px-3">
        <div className=" w-full mx-auto rounded-[10px] border-[2px] border-[#E8E8E8] bg-white p-[15px_10px] sm:p-[24px_22px]">
          <h1 className="text-[#141736] font-bold text-[20px]">
            Quick Transfer
          </h1>
          <div className="w-[49px] h-[2px] bg-[#8707B1]"></div>
          <QuickTransferDropdown />
          <div className="rounded-[10px] border-[2px] border-[#FF4CFF] px-4 max-w-[323px] w-full mt-[30px] pt-[18px] pb-[7px]">
            <label
              htmlFor=""
              className="outline-none max-w-[323px] w-full mt-[18px] text-[#A8B1BF] text-[18px] font-semibold"
            >
              Enter amount
            </label>
            <div className="flex items-center">
              <div className="flex">
                <span className="text-[26px] pr-1 font-semibold">$</span>
                <input
                  className="outline-none placeholder:text-[#3D424B] text-[26px] pr-2 font-semibold w-full"
                  placeholder="12,4"
                  type="number"
                  value={inputvalue}
                  onChange={handlechange}
                />
              </div>
              <div className="flex items-center">
                <div>
                  <img
                    src={profileImg2}
                    className="rounded-[10px]"
                    width={26}
                    height={26}
                  />
                </div>
                <div className="-ml-2">
                  <img
                    src={profileImg}
                    className="rounded-[10px]"
                    width={26}
                    height={26}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={visa} width={367} height={193} className="mt-[30px]" />
        <h1 className="text-[#141736] mt-[30px] text-[20px] font-semibold">
          Send Money
        </h1>
        <div className="bg-[#8707B1] max-w-[49px] w-full h-[2px]"></div>
        <SendMoneyDropdown />
        <div className="rounded-[10px] bg-white shadow-[0px_19.634px_39.268px_0px_rgba(122,122,122,0.20)] mt-[36px]">
          <div className="flex items-center gap-4 px-[27px]">
            <div>
              <img src={img} width={26} height={26} />
            </div>

            <label
              htmlFor=""
              className="text-[#798BA3] mt-[10px] text-[18px] font-medium outline-none"
            >
              Enter the amount
            </label>
          </div>
          <div className="flex items-center justify-between mt-[18px] px-[30px] pb-[18px]">
            <div className="flex">
              <span className="text-[37px] text-[#131635] font-semibold">
                $
              </span>
              <input
                className="outline-none pr-2 placeholder:text-[#131635] text-[#131635] text-[37px] font-semibold w-full"
                placeholder="8000"
                type="number"
                value={inputvalue2}
                onChange={handlechange2}
              />
            </div>
            <div className="flex w-[53px] items-center">
              <span className="w-[26px] h-[26px]">
                <img src={flag} width={26} height={26} />
              </span>
              <span className="-ml-2 w-[30px] flex items-center  h-[30px]">
                <Flag2Icon />
              </span>
            </div>
          </div>
        </div>
        <div>
          <Profile />
        </div>
        <button
          type="submit"
          className="text-white text-[16px] font-bold leading-[24px] w-full p-4 mt-8 hover:bg-transparent duration-300 border border-[#FF4CFF] hover:text-black bg-[#FF4CFF] rounded-[8px]"
        >
          Send Money
        </button>
      </div>
    </div>
  );
};

export default PaymentCard;
