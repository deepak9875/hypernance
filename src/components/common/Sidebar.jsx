const Sidebar = ({ active, setActive }) => {
  return (
    <>
      {active && (
        <div className="w-full h-full absolute z-[40] bg-black/70 top-0 left-0 right-0 bottom-0"></div>
      )}
      <div
        className={` lg:max-w-[250px] max-lg:absolute top-0 lg:top-0 h-full lg:min-h-full lg:max-h-full
    3xl:max-w-[300px] w-full z-[999] bg-[#240246] transition-all duration-300  ease-in-out bg-primary pt-[42px] 
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
            {/* <CloseIcon /> */}
          </span>
          <div className="flex lg:justify-center px-4">
            <a href="/">
              {/* <img
                className="w-[200px] 3xl:w-fit"
                src="/img/logo-img.png"
                alt="logo img"
              /> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
