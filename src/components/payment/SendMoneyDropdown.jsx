import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Debit2Icon, DropdownIcon } from "../common/icon";

const people = [
  { name: "Debit", price: "$10.680" },
  { name: "Debit", price: "$10" },
  { name: "Debit", price: "$12" },
  { name: "Debit", price: "$13" },
  { name: "Debit", price: "$14" },
  { name: "Debit", price: "$15" },
];
export default function SendMoneyDropdown() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative px-[18px] text-start mt-[13px] w-full h-[86px] cursor-default rounded-lg border-[1px] border-boysenberry bg-white">
            <div>
              <div className="flex gap-4">
                <Debit2Icon />
                <div className="flex justify-between w-full">
                  <span className="text-noblesilver justify-between font-semibold text-[18px]">
                    {selected.name}
                  </span>
                  <span className="text-noblesilver justify-between font-semibold text-[18px] pr-[25px]">
                    {selected.price}
                  </span>
                </div>
              </div>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
              <DropdownIcon />
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
                    `relative  select-none  ${active ? "" : ""}`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`flex justify-between w-full truncate  font-semibold text-[18px] cursor-pointer hover:text-white hover:bg-primary py-2 pl-4 pr-4 ${
                          selected
                            ? "font-medium text-black "
                            : "font-normal text-noblesilver"
                        }`}
                      >
                        {person.name}
                        <span>{person.price}</span>
                      </span>

                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
