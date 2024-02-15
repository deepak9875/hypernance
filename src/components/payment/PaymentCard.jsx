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
import CommonBtn from "../common/CommonBtn";

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
    <div className="bg-lynxwhite md:min-w-[270px]  mx-auto lg:mx-0 max-w-[378px] 2xl:max-w-[450px] w-full  pb-5">
      <div className="w-full mx-auto  ">
        <div className="w-full mx-auto rounded-[10px] border-[2px] border-unicornsilver bg-white p-4 xl:p-[24px_22px]">
          <h1 className="text-spanish font-bold text-[20px]">Quick Transfer</h1>
          <div className="w-[49px] h-[3px] bg-shadeOfViolet rounded-[3px]"></div>
          <QuickTransferDropdown />
          <div className="rounded-[10px] border-[2px] border-primary px-4  w-full mt-[30px] pt-[18px] pb-[7px]">
            <label
              htmlFor=""
              className="outline-none w-full mt-[18px] text-grayagate text-[18px] font-semibold"
            >
              Enter amount
            </label>
            <div className="flex items-center">
              <div className="flex">
                <span className="text-[26px] pr-1 font-semibold">$</span>
                <input
                  className="outline-none placeholder:text-blackbird text-[26px] pr-2 font-semibold w-full"
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
                    alt="profile"
                  />
                </div>
                <div className="-ml-2">
                  <img
                    src={profileImg}
                    className="rounded-[10px]"
                    width={26}
                    alt="profile"
                    height={26}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={visa}
            width={367}
            height={193}
            className="mt-[30px] w-full "
            alt="visa"
          />
        </div>
        <h1 className="text-spanish mt-[30px] text-[20px] font-semibold">
          Send Money
        </h1>
        <div className="bg-shadeOfViolet max-w-[49px] rounded-[3px] w-full h-[3px]"></div>
        <SendMoneyDropdown />
        <div className="rounded-[10px] bg-white shadow-[0px_19.634px_39.268px_0px_rgba(122,122,122,0.20)] mt-[36px]">
          <div className="flex items-center gap-4 px-4 xl:px-[27px]">
            <>
              <img src={img} width={26} height={26} alt="enter amount" />
            </>

            <label
              htmlFor=""
              className="text-fadeddenim mt-[10px] text-[18px] font-medium outline-none"
            >
              Enter the amount
            </label>
          </div>
          <div className="flex items-center justify-between mt-[18px] px-4 xl:px-[30px] pb-[18px]">
            <div className="flex">
              <span className="text-[37px] text-spanishroast font-semibold">
                $
              </span>
              <input
                className="outline-none pr-2 placeholder:text-spanishroast text-spanishroast text-[37px] font-semibold w-full"
                placeholder="8000"
                type="number"
                value={inputvalue2}
                onChange={handlechange2}
              />
            </div>
            <div className="flex w-[53px] items-center">
              <span className="w-[26px] h-[26px]">
                <img src={flag} width={26} height={26} alt="flag" />
              </span>
              <span className="-ml-2 w-[30px] flex items-center  h-[30px]">
                <Flag2Icon />
              </span>
            </div>
          </div>
        </div>
        <>
          <Profile />
        </>
        <div className="mt-9">
          <CommonBtn title=" Send Money" />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
