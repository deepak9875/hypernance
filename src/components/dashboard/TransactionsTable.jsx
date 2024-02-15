import { tabelData } from "../common/Helper";
import TransactionsTableList from "./TransactionsTableList";

const TransactionsTable = () => {
  return (
    <>
      <div className="h-[300px] bg-white overflow-auto w-full">
        <table className="w-full  table-auto">
          <tbody>
            {tabelData.map((item, index) => (
              <TransactionsTableList item={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionsTable;
