import React from "react";
import { CallIcon, DeleteIcon, EditIcon, MailIcon } from "../common/icon";
import { Link } from "react-router-dom";
const UserCard = ({ items }) => {
  return (
    <>
      <div className="sm:max-w-[267px] rounded-[10px] h-fit w-full p-6 bg-white border border-[rgba(0,0,0,0.10)]">
        <div className="flex justify-between items-start">
          <img
            className="w-[82px] h-[82px] rounded-[50%] "
            src={items.img}
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
        <p className="text-[20px] mt-[7.5px] font-medium leading-normal text-coarsewool font-poppins">
          {items.name}
        </p>
        <div className="w-full h-[1px] my-6 bg-black/10"></div>
        <Link to={`#`} className="flex cursor-pointer items-center gap-2">
          <span className="">
            <CallIcon />
          </span>
          <span className="text-[14px] font-medium leading-normal text-coarsewool">
            {items.phone}
          </span>
        </Link>
        <Link to={`#`} className="flex items-center cursor-pointer mt-4 gap-2">
          <span className="cursor-pointer">
            <MailIcon />
          </span>
          <span className="text-[14px] font-medium leading-normal text-coarsewool">
            {items.email}
          </span>
        </Link>
      </div>
    </>
  );
};

export default UserCard;
