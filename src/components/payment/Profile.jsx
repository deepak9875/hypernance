import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "../common/icon";
import img from "../../assets/img/teonta-pegues-img.png";
export default function Profile() {
  return (
    <div className="w-full mt-[35px]">
      <div className="mx-auto w-full">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between">
                <div className="flex gap-5">
                  <div>
                    <img src={img} width={35} height={35} alt="foter-img" />
                  </div>
                  <span className="text-[20px] font-semibold">
                    Teonta Pegues
                  </span>
                </div>
                <div
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } transition duration-300 ease-in-out  `}
                >
                  <PlusIcon />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-2">
                <div className="text-[20px] mt-2 font-semibold bg-white rounded-xl p-4">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
