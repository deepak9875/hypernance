import React from "react";
import Layout from "../components/common/Layout";
import PaymentCard from "../components/payment/PaymentCard";
import AllDashboard from "../components/dashboard/AllDashboard";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex w-full md:flex-row mb-2  mt-5 flex-col max-w-full h-full overflow-auto justify-between px-5 xl:px-[30px] gap-5">
        <AllDashboard />
        <PaymentCard />
      </div>
    </Layout>
  );
};

export default Dashboard;
