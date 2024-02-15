import minilogo from "../../assets/img/minilogo.png";
import {
  Activityicon,
  Analyticsicon,
  Crossicon,
  Dashboardicon,
  Geticon,
  Invoicesicon,
  Messagesicon,
  Settingsicon,
  Usericons,
  Walleticon,
} from "./icon";
const Sidebar = ({ active, setActive }) => {
  return (
    <>
      {active && (
        <div className="w-full h-full absolute z-[40] bg-black/70 top-0 left-0 right-0 bottom-0"></div>
      )}
      <div
        className={` lg:max-w-[240px] max-lg:absolute top-0 lg:top-0 h-full lg:min-h-full lg:max-h-full
    3xl:max-w-[300px] w-full z-[999] bg-[#240246] transition-all duration-300  ease-in-out bg-primary pt-[25px] 
    ${
      active
        ? "left-0 transition duration-500 ease-in-out "
        : "left-[-105%] transition duration-500 ease-in-out"
    }`}
      >
        <div className="w-full transition duration-500 ease-in-out">
          <span
            onClick={() => setActive(false)}
            className="lg:hidden absolute transition rounded-full duration-300 ease-in-out hover:rotate-180 right-2 top-9  h-9 w-9 flex items-center justify-center bg-blacklight cursor-pointer"
          >
            <Crossicon />
          </span>
          <div className="flex lg:justify-center px-4">
            <a href="/">
              <img
                className="w-[200px] 3xl:w-fit"
                src={minilogo}
                alt="logo img"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-[22px] sm:w-[250px] lg:w-full h-[80%]  overflow-auto sm:h-full justify-between sm:pb-[90px]">
          <div className="flex  sm:pr-4 flex-col ">
            <div className="flex items-center group gap-[10px]">
              <div className="w-[4px] h-[33px] group-hover:bg-[#FF4CFF] rounded-r-[8px]"></div>
              <div className="w-full  gap-1 px-[15px] py-3 cursor-pointer items-center justify-between   rounded-[6px] hover:bg-[rgba(246,248,249,0.20)] flex">
                <div className="flex gap-[10px]  items-center">
                  <Dashboardicon />
                  <h1 className="text-[#EBEBEB] text-[16px] font-normal group-hover:text-[#FF4CFF] group-hover:font-medium">
                    Dashboard{" "}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center group gap-[10px]">
              <div className="w-[4px] h-[33px] group-hover:bg-[#FF4CFF] rounded-r-[8px]"></div>
              <div className="w-full  gap-1 px-[15px] py-3 cursor-pointer items-center justify-between   rounded-[6px] hover:bg-[rgba(246,248,249,0.20)] flex">
                <div className="flex gap-[10px]  items-center">
                  <Usericons />
                  <h1 className="text-[#EBEBEB] text-[16px] font-normal group-hover:text-[#FF4CFF] group-hover:font-medium">
                    Users{" "}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center group gap-[10px]">
              <div className="w-[4px] h-[33px] group-hover:bg-[#FF4CFF] rounded-r-[8px]"></div>
              <div className="w-full  gap-1 px-[15px] py-3 cursor-pointer items-center justify-between   rounded-[6px] hover:bg-[rgba(246,248,249,0.20)] flex">
                <div className="flex gap-[10px]  items-center">
                  <Messagesicon />
                  <h1 className="text-[#EBEBEB] text-[16px] font-normal group-hover:text-[#FF4CFF] group-hover:font-medium">
                    Messages
                  </h1>
                </div>
                <button className="bg-[#FF4CFF] h-[21px] w-[21px] rounded-full text-[13px] font-medium text-white">
                  5
                </button>
              </div>
            </div>

            <div className="flex items-center group gap-[10px]">
              <div className="w-[4px] h-[33px] group-hover:bg-[#FF4CFF] rounded-r-[8px]"></div>
              <div className="w-full  gap-1 px-[15px] py-3 cursor-pointer items-center justify-between   rounded-[6px] hover:bg-[rgba(246,248,249,0.20)] flex">
                <div className="flex gap-[10px]  items-center">
                  <Walleticon />
                  <h1 className="text-[#EBEBEB] text-[16px] font-normal group-hover:text-[#FF4CFF] group-hover:font-medium">
                    My Wallets
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center group gap-[10px]">
              <div className="w-[4px] h-[33px] group-hover:bg-[#FF4CFF] rounded-r-[8px]"></div>
              <div className="w-full  gap-1 px-[15px] py-3 cursor-pointer items-center justify-between   rounded-[6px] hover:bg-[rgba(246,248,249,0.20)] flex">
                <div className="flex gap-[10px]  items-center">
                  <Activityicon />
                  <h1 className="text-[#EBEBEB] text-[16px] font-normal group-hover:text-[#FF4CFF] group-hover:font-medium">
                    Activity
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center group gap-[10px]">
              <div className="w-[4px] h-[33px] group-hover:bg-[#FF4CFF] rounded-r-[8px]"></div>
              <div className="w-full  gap-1 px-[15px] py-3 cursor-pointer items-center justify-between   rounded-[6px] hover:bg-[rgba(246,248,249,0.20)] flex">
                <div className="flex gap-[10px]  items-center">
                  <Analyticsicon />
                  <h1 className="text-[#EBEBEB] text-[16px] font-normal group-hover:text-[#FF4CFF] group-hover:font-medium">
                    Analytics
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  mt-10  flex-col pr-4">
            {" "}
            <div className="flex items-center group gap-[10px]">
              <div className="w-[4px] h-[33px] group-hover:bg-[#FF4CFF] rounded-r-[8px]"></div>
              <div className="w-full  gap-1 px-[15px] py-3 cursor-pointer items-center justify-between   rounded-[6px] hover:bg-[rgba(246,248,249,0.20)] flex">
                <div className="flex gap-[10px]  items-center">
                  <Geticon />
                  <h1 className="text-[#EBEBEB] text-[16px] font-normal group-hover:text-[#FF4CFF] group-hover:font-medium">
                    Get Help
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center group gap-[10px]">
              <div className="w-[4px] h-[33px] group-hover:bg-[#FF4CFF] rounded-r-[8px]"></div>
              <div className="w-full  gap-1 px-[15px] py-3 cursor-pointer items-center justify-between   rounded-[6px] hover:bg-[rgba(246,248,249,0.20)] flex">
                <div className="flex gap-[10px]  items-center">
                  <Settingsicon />
                  <h1 className="text-[#EBEBEB] text-[16px] font-normal group-hover:text-[#FF4CFF] group-hover:font-medium">
                    Settings
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
