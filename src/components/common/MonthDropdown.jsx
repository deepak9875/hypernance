import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Downarrowicon } from "./icon";

const people = [
  { name: "Month" },
  { name: "jan" },
  { name: "Feb" },
  { name: "march" },
  { name: "Apr" },
  { name: "may" },
  { name: "june" },
  { name: "july" },
  { name: "aug" },
  { name: "sep" },
  { name: "oct" },
  { name: "nov" },
  { name: "dec" },
];

export default function MonthDropdown() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className=" relative">
      <Listbox value={selected} onChange={setSelected} className="">
        {({ open }) => (
          <>
            <form action="">
              <Listbox.Button className="relative w-[58px] h-[24px] cursor-pointer text-black rounded-[3px] bg-dolomitecrystal flex gap-1 items-center pl-2 ">
                <span className="block truncate text-[10px] font-medium ">
                  {selected.name}
                </span>
                <div
                  className={`${
                    open && "rotate-180 transform"
                  } absolute right-1 flex items-center justify-center transition-all duration-200 ease-in-out `}
                >
                  <Downarrowicon />
                </div>
              </Listbox.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options className="!w-[58px] example h-[90px] absolute top-18 right-0 overflow-auto rounded-md text-black bg-dolomitecrystal text-[10px] ">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className="cursor-pointer py-1 pl-1 pr-4 w-full hover:bg-[rgba(255,255,255,0.05)]"
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span>{person.name}</span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </form>
          </>
        )}
      </Listbox>
    </div>
  );
}
