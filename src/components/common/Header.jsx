import { Menuicon, Notficationicon, Searchicon } from "./icon";
import mainlogo from "../../assets/img/jordan-stlouis-img.png";
import { Link, useLocation } from "react-router-dom";
import minilogo from "../../assets/img/minilogo.png";

const Header = ({ setActive }) => {
  const router = useLocation().pathname;
  let content;
  switch (router) {
    case "/":
      content = "Dashboard";
      break;
    case "/users":
      content = "Users";
      break;
    default:
      content = "";
  }
  return (
    <div className="w-full justify-between bg-magicWhale sm:bg-transparent sm:rounded-[16px] lg:pr-[70px] lg:rounded-[0px_32px_32px_0px] flex items-center gap-2 px-5 lg:px-0 lg:pl-[30px] py-3 lg:py-6">
      <h1 className="text-black text-[24px] hidden sm:block font-semibold">
        {content}
      </h1>
      <div className="sm:hidden cursor-pointer">
        <img src={minilogo} alt="logo" />
      </div>
      <div className="flex items-center gap-[22.5px]">
        <div className=" items-center gap-[22.5px] hidden sm:flex">
          <Link to={`#`} className="cursor-pointer">
            <Searchicon />
          </Link>
          <Link to={`#`} className="cursor-pointer">
            {" "}
            <Notficationicon />
          </Link>
          <div className="flex  gap-[10px]">
            <img
              className="rounded-full cursor-pointer w-[30px] h-[30px]"
              src={mainlogo}
              alt="main"
            />
            <h2 className="text-coarsewool cursor-pointer text-[16px] font-normal">
              Jordan Stlouis
            </h2>
          </div>
        </div>
        <button
          className="lg:hidden"
          type="submit"
          onClick={() => setActive(true)}
        >
          <Menuicon />
        </button>
      </div>
    </div>
  );
};

export default Header;
