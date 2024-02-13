import { tabelData } from "../common/Helper";
import DashboardTableList from "./DashboardTableList";

const DashboardTable = () => {
  return (
    <>
      <div className="lg:h-[80%] overflow-auto  w-full">
        <table className=" w-full  table-auto  ">
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
