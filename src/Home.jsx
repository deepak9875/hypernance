import React from "react";
import { Link } from "react-router-dom";
import AllUserCards from "./components/user/AllUserCards";

const Home = () => {
  return (
    <div>
      <div className="flex gap-3 justify-center mt-10">
        <Link to={`/signin`}>
          <button className="w-[200px] h-[48px] rounded-lg bg-black text-white">
            sign in
          </button>
        </Link>
        <Link to={`/signup`}>
          <button className="w-[200px] h-[48px] rounded-lg bg-black text-white">
            sign up
          </button>
        </Link>
      </div>
      {/* <AllUserCards /> */}
    </div>
  );
};

export default Home;
