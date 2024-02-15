import { tabelData } from "../common/Helper";
import DashboardTableList from "./DashboardTableList";

const DashboardTable = () => {
  return (
    <>
      <div className="  h-full  bg-white overflow-auto w-full">
        <table className=" whitespace-nowrap overflow-auto h-full table-auto">
          <tbody className="h-full">
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
