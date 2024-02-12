import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="overflow-hidden h-screen flex  w-full mx-auto bg-[#F7F7F7]">
      <Sidebar active={active} setActive={setActive} />
      <div className="max-w-[1556px] 4xl:max-w-full lg:min-h-full bg-[] lg:max-h-full overflow-hidden flex flex-col w-full relative">
        <Header active={active} setActive={setActive} />
        <div className="relative flex flex-col rbc-div lg:overflow-hidden overflow-auto lg:grow lg:pl-3 3xl:pl-5">
          <div className="absolute lg:block hidden top-0 left-0"></div>
          <div className="lg:grow flex flex-col rbc-div lg:min-h-full  lg:overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
