import React from "react";
import MonthDropdown from "../common/MonthDropdown";
import chart from "../../assets/img/chart.png";
import Expensemap1 from "../../assets/img/Expensemap1.png";
import Expensemap2 from "../../assets/img/Expensemap2.png";
import Expensemap3 from "../../assets/img/Expensemap3.png";
import { Arrowicon, Arrowicon2, Arrowicon3, Rangeicon } from "../common/icon";

const MoneyFlow = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row md:flex-col justify-between   w-full xl:flex-row items-center gap-5 mt-[30px]">
        <div className="p-5 rounded-[10px] border border-mercury bg-white w-full">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-[14px] text-spanish ">
                Money Flow
              </p>
              <div className="w-[49px] h-[3px] bg-shadeOfViolet rounded-[3px]"></div>
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
              className="w-full h-[162px] mt-[13px]"
            />
          </div>
        </div>
        <div className="p-5 rounded-[10px] border border-mercury bg-white w-full">
          <div className="flex justify-between items-center">
            <div>
              <p className=" font-medium text-[14px] text-spanish ">Expense</p>
              <div className=" w-[37px] h-[2px] bg-shadeOfViolet rounded-[8px]"></div>
            </div>
            <div>
              <MonthDropdown />
            </div>
          </div>
          <div className="flex justify-between items-center gap-[15px] flex-row sm:flex-col lg:flex-row mt-[26px]">
            <img
              src={Expensemap1}
              alt="Expensemap1 img"
              className="w-[188px] h-[149px] "
            />
            <div className="flex max-sm:flex-col max-lg:flex-row flex-col gap-5">
              <img
                src={Expensemap2}
                alt="Expensemap1 img"
                className="w-[104px] h-[82px]"
              />
              <img
                src={Expensemap3}
                alt="Expensemap1 img"
                className="w-[104px] h-[82px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyFlow;
