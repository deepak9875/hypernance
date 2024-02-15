import React from "react";
import logo from "../../assets/img/logo.png";

const HelloSignCommon = ({ title }) => {
  return (
    <>
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
          <p className="text-mercury text-[16px] font-normal leading-[24px]">
            {title}
          </p>
        </div>
      </div>
    </>
  );
};

export default HelloSignCommon;
