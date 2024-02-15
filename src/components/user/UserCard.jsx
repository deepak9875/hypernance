import React from "react";
import userImg from "../../assets/img/user-img.png";
import { CallIcon, DeleteIcon, EditIcon, MailIcon } from "../common/icon";
const UserCard = () => {
  return (
    <div className="max-w-[267px] rounded-[10px] w-full p-6 bg-white border border-[rgba(0,0,0,0.10)]">
      <div className="flex justify-between items-start">
        <img
          className="w-[82px] h-[82px] rounded-[50%] "
          src={userImg}
          alt="user img"
        />
        <span className="flex items-center gap-3 ">
          <span className="cursor-pointer">
            <EditIcon />
          </span>
          <span className="cursor-pointer">
            <DeleteIcon />
          </span>
        </span>
      </div>
      <p className="text-[20px] mt-[7.5px] font-medium leading-normal text-[#171B26] font-poppins">
        Jordan Stlouis
      </p>
      <div className="w-full h-[1px] my-6 bg-black/10"></div>
      <a href="#" className="flex cursor-pointer items-center gap-2">
        <span className="">
          <CallIcon />
        </span>
        <span className="text-[14px] font-medium leading-normal text-[#171B26]">
          (684) 555-0102
        </span>
      </a>
      <a href="#" className="flex items-center cursor-pointer mt-4 gap-2">
        <span className="cursor-pointer">
          <MailIcon />
        </span>
        <span className="text-[14px] font-medium leading-normal text-[#171B26]">
          lawson@example.com
        </span>
      </a>
    </div>
  );
};

export default UserCard;
