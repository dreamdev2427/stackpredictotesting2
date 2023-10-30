"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { BellIcon, InfoIcon, languageIcon } from "../../assets/images";
import { i18n } from "@i18n/settings";
import { useRouter } from "next/navigation";
import { LNG } from "../../../../src/@types/generic";
import { classNames } from "../../utils";
import useBreakpoints from "@/hooks/useBreakpoints";

export default function Notifications({ lng }: LNG): JSX.Element {
  const router = useRouter();
  const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

  return (
    <Listbox value={lng.toUpperCase()} onChange={(value) => router.push(value)}>
      {({ open }) => (
        <>
          <div className="">
            <Listbox.Button className="relative cursor-default flex items-center ">
              {/* <Image src={languageIcon} alt="" className="w-4" /> */}
              <div className="flex items-center ml-1">

                {isXs || isSm ? null : <span className="block truncate">
                  <Image className="w-5 mr-2 " src={BellIcon} alt="Icon" />
                  </span>}
              </div>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className=" absolute top-24 right-[7.5rem] z-20 overflow-auto w-[20%]   border border-base-gray flex flex-col items-center justify-between bg-[#203554] ">
                  <Listbox.Option
                    key={''}
                    className="cursor-pointer select-none px-4  w-full"
                    value={''}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center  p-2">
                          <span
                            className="w-full text-gray-400"
                          >
                          You currently have no new notification
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
