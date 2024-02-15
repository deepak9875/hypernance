import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { AdministratorIcon } from "../common/icon";

const administrator = [
  { name: "Administrator" },
  { name: "Manager" },
  { name: "User" },
];
const Administrator = () => {
  const [selected, setSelected] = useState(administrator[0]);
  return (
    <>
      <div className="w-full">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative cursor-pointer w-full text-[16px] font-medium text-secondary leading-6   bg-white py-3 border border-black/300 rounded-md pl-4 h-[48px] pr-6 text-left">
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
                {administrator.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? "bg-primary text-white" : "text-secondary"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate text-[16px] font-medium cursor-pointer ${
                            selected ? "" : ""
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
