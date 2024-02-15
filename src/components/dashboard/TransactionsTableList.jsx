import React from "react";

const TransactionsTableList = ({ item }) => {
  return (
    <>
      <tr className=" h-[59px]  hover:bg-[#8707B1]  group cursor-pointer justify-between transition duration-300 ease-in-out  max-lg:justify-between  rounded-[12px] flex gap-5 lg:gap-[68px] sm:gap-10   px-5 text-[#040707] items-center hover:text-white">
        <td className="flex gap-[18px] items-center w-[130px] ">
          {item.icon}
          <p className="text-[14px] font-normal  ">{item.name}</p>
        </td>
        <td className="w-[50px]">
          <h2 className="text-[#8D8D8D] text-[11px] transition duration-300 ease-in-out group-hover:text-[#D2D3D6] font-normal">
            Date
          </h2>
          <p className=" text-[12px] font-normal">{item.date}</p>
        </td>
        <td className="w-[50px]">
          <h2 className="text-[#8D8D8D]  text-[11px] transition duration-300 ease-in-out group-hover:text-[#D2D3D6] font-normal">
            Time
          </h2>
          <p className=" text-[12px] font-normal">{item.time}</p>
        </td>
        <td className="w-[50px]">
          <h2 className="text-[#8D8D8D] text-[11px] transition duration-300 ease-in-out group-hover:text-[#D2D3D6] font-normal">
            Amount
          </h2>
          <p className=" text-[12px] font-normal">{item.amount}</p>
        </td>
        <td>
          <button
            type="submit"
            className="w-[90px] h-[30px] group-hover:border-white border group-hover:text-white text-[#040707] border-[#040707] rounded-[7px] text-[13px] font-normal"
          >
            Invoice
          </button>
        </td>
      </tr>
    </>
  );
};

export default TransactionsTableList;
