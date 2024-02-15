import React from "react";

const CommonBtn = ({ title }) => {
  return (
    <>
      <button className="w-full border border-primary bg-primary h-[56px] text-white rounded-[9.421px] text-[19.73px] font-semibold hover:bg-transparent hover:text-primary transition duration-300 ease-in-out">
        {title}
      </button>
    </>
  );
};

export default CommonBtn;
