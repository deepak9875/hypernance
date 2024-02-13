import React from "react";
import DashboardTable from "./DashboardTable";

const DashboardTablecard = () => {
  return (
    <div className="max-w-[739px] p-[19px] w-full rounded-[10px] border border-[#EBEBEB] bg-white">
      <div>
        <p className=" font-medium text-[14px] text-[#141736] ">Transactions</p>
        <div className=" w-[49px] h-[2px] bg-[#8707B1] rounded-[8px]"></div>
      </div>
      <div className="w-full mt-[32px] flex justify-center">
        {" "}
        <DashboardTable />
      </div>
    </div>
  );
};

export default DashboardTablecard;
