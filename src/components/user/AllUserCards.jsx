import React from "react";
import UserCard from "./UserCard";
import { usersData } from "../common/Helper";

const AllUserCards = () => {
  return (
    <div className="flex flex-wrap justify-between xl:justify-normal w-full   pt-5 gap-6">
      {usersData.map((item, index) => (
        <UserCard items={item} key={index} />
      ))}
    </div>
  );
};

export default AllUserCards;
