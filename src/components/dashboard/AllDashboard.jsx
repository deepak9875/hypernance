import React from "react";
import TransactionsTableCard from "./TransactionsTableCard";
import JoinNow from "./JoinNow";
import MoneyFlow from "./MoneyFlow";

const AllDashboard = () => {
  return (
    <>
      <h1 className="text-black sm:hidden text-[24px] font-semibold">
        Dashboard
      </h1>
      <div className="flex gap-5 w-full md:max-w-[740px] 2xl:max-w-[1000px] md:min-w-[400px] lg:min-w-[455px] flex-col lg:flex-row ">
        <div className="w-full h-full">
          <div className=" w-full">
            <JoinNow />
            <MoneyFlow />
          </div>
          <div className="mt-[30px] w-full">
            <TransactionsTableCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDashboard;
