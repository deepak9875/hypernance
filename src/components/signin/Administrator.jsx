import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { AdministratorIcon } from "../common/icon";

const people = [
  { name: "Administrator" },
  { name: "Administrator1" },
  { name: "Administrator2" },
  { name: "Administrator3" },
  { name: "Administrator4" },
  { name: "Administrator5" },
];

const Administrator = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <>
      <div className="w-full">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative w-full text-[16px] font-medium text-[#040707] leading-6 cursor-default  bg-white py-3 border border-black/300 rounded-md pl-4 h-[48px] pr-6 text-left">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <AdministratorIcon />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {people.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[#FF4CFF] text-white" : "text-[#040707]"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
};

export default Administrator;
