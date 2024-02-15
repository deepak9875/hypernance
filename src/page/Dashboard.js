import React from "react";
import AllUserCards from "../components/user/AllUserCards";
import Layout from "../components/common/Layout";
import PaymentCard from "../components/payment/PaymentCard";
import AllDashboard from "../components/dashboard/AllDashboard";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex w-full px-[30px] gap-5">
        <AllDashboard />
        {/* <AllUserCards /> */}
        <PaymentCard />
      </div>
    </Layout>
  );
};

export default Dashboard;
