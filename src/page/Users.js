import React from "react";
import AllUserCards from "../components/user/AllUserCards";
import Layout from "../components/common/Layout";
const Users = () => {
  return (
    <Layout>
      <div className="overflow-auto h-full p-5 sm:p-7">
        <h1 className="text-black text-[24px]  sm:hidden font-semibold">
          Users
        </h1>
        <AllUserCards />
      </div>
    </Layout>
  );
};

export default Users;
