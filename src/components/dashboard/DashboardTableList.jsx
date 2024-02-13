const DashboardTableList = ({ item }) => {
  return (
    <>
      <tr className=" h-[60px] hover:bg-[#8707B1] group   rounded-[12px] flex gap-5 lg:gap-[68px] sm:gap-10   py-6 px-5 text-black items-center hover:text-white">
        <td className="flex gap-[18px] w-[130px] ">
          {item.icon}
          <p className="text-[14px] font-normal  ">{item.name}</p>
        </td>
        <td className="w-[70px]">
          <h2 className="text-[#8D8D8D] text-[11px] font-normal">Date</h2>
          <p className=" text-[12px] font-normal">{item.date}</p>
        </td>
        <td>
          <h2 className="text-[#8D8D8D] text-[11px] font-normal">Time</h2>
          <p className=" text-[12px] font-normal">{item.time}</p>
        </td>
        <td>
          <h2 className="text-[#8D8D8D] text-[11px] font-normal">Amount</h2>
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

export default DashboardTableList;
