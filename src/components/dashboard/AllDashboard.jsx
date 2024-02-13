import React from "react";
import MonthDropdown from "../common/MonthDropdown";
import chart from "../assets/img/chart.png";
import Expensemap1 from "../assets/img/Expensemap1.png";
import Expensemap2 from "../assets/img/Expensemap2.png";
import Expensemap3 from "../assets/img/Expensemap3.png";
// import Card from "./common/Card";
import DashboardTable from "./DashboardTable";
import { Arrowicon, Arrowicon2, Arrowicon3, Rangeicon } from "../common/icon";

const AllDashboard = () => {
  return (
    <>
      <div className="flex gap-5 w-full ">
        <div className="px-5">
          <div className="background-join2 sm:background-join bg-center bg-cover bg-no-repeat h-[237px] w-full max-w-[740px] pl-5 sm:pl-[46px] pt-[30px] sm:pt-[39px] pr-[40px] rounded-[10px]">
            <div className="flex flex-col gap-5 items-start justify-start max-w-[400px] w-full">
              <div>
                <p className="text-white text-[24px] sm:text-[31px] font-semibold leading-normal tracking-[0.93px]">
                  Join Now & Cashback up to
                  <span className="text-[#FF4CFF]"> 60%</span> ✨
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[122px] h-[48px] rounded-[10px] bg-[#FED7FD] border border-[#FED7FD] hover:bg-transparent duration-300 text-[16px] font-medium leading-normal traacking-[0.48px] hover:text-[#FED7FD] text-black text-center"
                >
                  Get it now
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-[29px] mt-[30px]">
            <div className="p-5 rounded-[10px] border border-[#EBEBEB] bg-white w-[355px]">
              <div className="flex justify-between items-center">
                <div>
                  <p className=" font-medium text-[14px] text-[#141736] ">
                    Money Flow
                  </p>
                  <div className=" w-[49px] h-[2px] bg-[#8707B1] rounded-[8px]"></div>
                </div>
                <div className="flex items-center gap-[17px]">
                  <Arrowicon />
                  <Rangeicon />
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                {" "}
                <div className="flex gap-[6px] items-center">
                  <Arrowicon2 />
                  <p>Savings</p>
                  <Arrowicon3 />
                  <p>+6,79%</p>
                </div>
                <div>
                  <MonthDropdown />
                </div>
              </div>
              <div>
                <img
                  src={chart}
                  alt="chart img"
                  className="w-[315px] h-[162px] mt-[13px]"
                />
              </div>
            </div>
            <div className="p-5 rounded-[10px] border border-[#EBEBEB] bg-white w-[355px]">
              <div className="flex justify-between items-center">
                <div>
                  <p className=" font-medium text-[14px] text-[#141736] ">
                    Expense
                  </p>
                  <div className=" w-[37px] h-[2px] bg-[#8707B1] rounded-[8px]"></div>
                </div>
                <div>
                  <MonthDropdown />
                </div>
              </div>
              <div className="flex gap-[15px] mt-[26px]">
                <img
                  src={Expensemap1}
                  alt="Expensemap1 img"
                  className="w-[188px] h-[149px] "
                />
                <div className="flex flex-col gap-5">
                  <img
                    src={Expensemap2}
                    alt="Expensemap1 img"
                    className="w-[104px] h-[82px] "
                  />
                  <img
                    src={Expensemap3}
                    alt="Expensemap1 img"
                    className="w-[104px] h-[82px] "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <DashboardTable />
          </div>
        </div>
        <div>{/* <Card /> */}</div>
      </div>
    </>
  );
};

export default AllDashboard;
