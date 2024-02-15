import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="overflow-hidden h-screen flex  w-full mx-auto bg-lynxwhite">
      <Sidebar active={active} setActive={setActive} />
      <div className="max-w-full lg:min-h-full  lg:max-h-full overflow-hidden flex flex-col w-full relative">
        <Header active={active} setActive={setActive} />
        <div className="flex flex-col rbc-div lg:overflow-hidden overflow-auto lg:grow ">
          <div className="lg:grow flex flex-col rbc-div lg:min-h-full  lg:overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
