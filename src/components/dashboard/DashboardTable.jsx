import { tabelData } from "../common/Helper";
import DashboardTableList from "./DashboardTableList";

const DashboardTable = () => {
  return (
    <>
      <div className=" overflow-auto border-[0.95px] border-[#EBEBEB] rounded-[10px] bg-white h-[40%] w-full">
        <table className="w-full overflow-auto h-full table-auto">
          <tbody>
            {tabelData.map((item, index) => (
              <DashboardTableList item={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardTable;
