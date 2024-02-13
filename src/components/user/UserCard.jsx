import React from "react";
import userImg from "../assets/img/user-img.png";
import { DeleteIcon, EditIcon } from "../common/icon";
const UserCard = () => {
  return (
    <div className="max-w-[267px] w-full bg-white border border-[rgba(0,0,0,0.10)]">
      <div className="flex justify-between">
        <img
          className="w-[82px] h-[82px] rounded-[50%] "
          src={userImg}
          alt="user img"
        />
        <span className="flex items-center gap-3 ">
          <EditIcon />
          <DeleteIcon />
        </span>
      </div>
      <p className="text-[20px] mt-[7.5px] font-medium leading-normal text-[#171B26] font-poppins">
        Jordan Stlouis
      </p>
      <div className="w-full h-[1px] my-6 bg-black/10"></div>
      <div></div>
    </div>
  );
};

export default UserCard;
