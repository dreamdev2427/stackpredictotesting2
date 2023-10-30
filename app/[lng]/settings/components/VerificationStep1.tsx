"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { EmailIcon, Phone, ProfileIcone, SquareUser, languageIcon } from "../../assets/images";
import { i18n } from "@i18n/settings";
import { useRouter } from "next/navigation";
import { LNG } from "../../../../src/@types/generic";
import { classNames } from "../../utils";
import useBreakpoints from "@/hooks/useBreakpoints";

export default function VerificationStep1({ lng }: LNG): JSX.Element {
  const router = useRouter();
  const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

  return (
    <Listbox onChange={(value) => router.push(value)}>
      {({ open }) => (
        <>
          <div className="border mb-[20px] items-center justify-between py-[10px] px-5  rounded ">
            <Listbox.Button className="relative cursor-default flex items-center w-full ">
              {/* <Image src={languageIcon} alt="" className="w-4" /> */}
              <div className="flex items-center justify-between w-full  ">
                {isXs || isSm ? null : <span className="block truncate">1. Confirm mail & phone number. Add personal Details</span>}
                <ChevronDownIcon
                  className="h-5 w-5 pointer-events-none ml-6"
                  aria-hidden="true"
                />
              </div>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"

            >
              <Listbox.Options className="overflow-auto w-[100%] mt-4 border-base-gray flex flex-col items-center justify-between bg-[#011027] ">
                <Listbox.Option
                  key={''}
                  className="cursor-pointer select-none px-4  w-full"
                  value={''}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center mb-[10px] w-full">
                        <span
                          className="w-full"
                        >
                          <div className="mt-4  p-2">
                            <p className="mb-2 text-gray-400">Details to confirm</p>
                            <div className="flex w-[60%] justify-between">
                              <div className="flex items-center justify-between">
                                <Image className="w-4 mr-4" src={EmailIcon} alt="" />
                                <p className="">Details to confirm</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <Image className="w-4 mr-4" src={Phone} alt="" />
                                <p className="">Details to confirm</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <Image className="w-4 mr-4" src={ProfileIcone} alt="" />
                                <p className="">Details to confirm</p>
                              </div>
                            </div>
                            <hr className="my-4" />
                          </div>
                          <div className=" p-2">
                            <p className="mb-2 text-gray-400">Deposit Limit</p>
                            <p className="mb-2 ">$10,000 USD</p>
                            <p className="mb-2 text-xs text-gray-400">This limit will apply for 30 days after the first deposit</p>

                            <hr className="my-4" />
                          </div>
                          <div className="">
                            <button
                              type="button"
                              className="flex mb-2 w-[20%] p-2 justify-center border hover:bg-[#011027]"
                            >
                              Complete now
                            </button>
                          </div>


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
