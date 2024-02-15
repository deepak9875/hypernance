import React from "react";
import AllUserCards from "../components/user/AllUserCards";
import Layout from "../components/common/Layout";
import PaymentCard from "../components/payment/PaymentCard";
import AllDashboard from "../components/dashboard/AllDashboard";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex w-full md:flex-row mt-3 sm:mt-10 lg:mt-0 flex-col max-w-full h-full px-4 xl:px-[30px] gap-5">
        <AllDashboard />
        <PaymentCard />
      </div>
    </Layout>
  );
};

export default Dashboard;
