import React from "react";

const JoinNow = () => {
  return (
    <>
      <div className="background-join2 sm:background-join bg-center bg-cover bg-no-repeat h-[237px] 2xl:h-[350px] w-full  pl-5 sm:pl-[46px] pt-[30px] sm:pt-[39px] pr-[40px] rounded-[10px]">
        <div className="flex flex-col gap-5 items-start justify-start max-w-[400px] w-full">
          <div>
            <p className="text-white text-[24px] lg:text-[31px] font-semibold leading-normal tracking-[0.93px]">
              Join Now & Cashback up to
              <span className="text-primary"> 60%</span> ✨
            </p>
          </div>
          <button
            type="submit"
            className="w-[122px] h-[48px] rounded-[10px] bg-pinkdiamond border border-pinkdiamond hover:bg-transparent duration-300 text-[16px] font-medium leading-normal traacking-[0.48px] hover:text-pinkdiamond text-black text-center"
          >
            Get it now
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinNow;
