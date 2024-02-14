import React from "react";
import AllUserCards from "./components/user/AllUserCards";
import Layout from "./components/common/Layout";
// import AllDashboard from "./components/dashboard/AllDashboard";

const Dashboard = () => {
  return (
    <Layout>
      {/* <AllDashboard /> */}
      <AllUserCards />
    </Layout>
  );
};

export default Dashboard;
