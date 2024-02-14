import React from "react";
import UserCard from "./UserCard";

const AllUserCards = () => {
  return (
    <div className="flex flex-wrap px-7 overflow-auto py-7 h-full gap-6">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default AllUserCards;
