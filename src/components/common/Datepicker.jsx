import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ClenderIcon } from "./icon";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const datepickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleDatepicker = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      datepickerRef.current &&
      !datepickerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  // Add event listener to handle clicks outside the datepicker
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="mt-[16px]">
        <div className="date-picker">
          <label htmlFor="" className="text-secondary text-[13px] font-medium">
            DOB
          </label>
          <div
            ref={datepickerRef}
            className="max-w-[383px] dates_picker  w-full py-[12px] px-[20px] font-normal border border-quaternary rounded-[8px] mt-[8px]  leading-[24px] flex items-center justify-between"
          >
            <DatePicker
              className="w-full outline-none placeholder:text-[13px]"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd-MM-yyyy"
              placeholderText="Date Of Birth"
              open={isOpen} // Controlled prop to determine if datepicker is open
            />
            <span
              id="date-picker-select"
              onClick={toggleDatepicker} // Toggle the datepicker when clicking on the icon
            >
              <ClenderIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datepicker;
