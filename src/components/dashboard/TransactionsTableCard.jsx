import React from "react";
import TransactionsTable from "./TransactionsTable";

const TransactionsTableCard = () => {
  return (
    <div className="h-full p-[19px] w-full rounded-[10px] border border-mercury bg-white">
      <div>
        <p className="font-medium text-[14px] text-spanish ">Transactions</p>
        <div className="w-[49px] h-[3px] bg-shadeOfViolet rounded-[3px]"></div>
      </div>
      <div className="w-full mt-[32px]  flex justify-center">
        {" "}
        <TransactionsTable />
      </div>
    </div>
  );
};

export default TransactionsTableCard;
