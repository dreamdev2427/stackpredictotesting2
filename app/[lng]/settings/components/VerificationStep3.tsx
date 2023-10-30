"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { AddressIcon, EmailIcon, Phone, ProfileIcone, SquareUser, UserIcon, languageIcon } from "../../assets/images";
import { i18n } from "@i18n/settings";
import { useRouter } from "next/navigation";
import { LNG } from "../../../../src/@types/generic";
import { classNames } from "../../utils";
import useBreakpoints from "@/hooks/useBreakpoints";

export default function VerificationStep3({ lng }: LNG): JSX.Element {
  const router = useRouter();
  const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

  return (
    <Listbox onChange={(value) => router.push(value)}>
      {({ open }) => (
        <>
          <div className="border mb-[20px] items-center justify-between py-[10px]  rounded px-5">
            <Listbox.Button className="relative cursor-default flex items-center w-full ">
              {/* <Image src={languageIcon} alt="" className="w-4" /> */}
              <div className="flex items-center justify-between w-full  ">

                {isXs || isSm ? null : <span className="block truncate">3. Verify residntial address</span>}
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
              <Listbox.Options className=" overflow-auto w-full mt-4  border-base-gray flex flex-col items-center justify-between bg-[#011027] ">
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
                            <p className="mb-2 text-gray-400">You will need to provide proof of your place residence </p>
                            <div className="flex w-[60%] justify-between">
                              <div className="flex items-center justify-between">
                                <Image className="w-4 mr-4" src={AddressIcon} alt="" />
                                <p className="">Add profile information</p>
                              </div>
                            </div>
                            <hr className="my-4" />
                          </div>
                          <div className=" p-2">
                            <p className="mb-2 text-gray-400">Deposit Limit</p>
                            <p className="mb-2 ">Unlimited</p>
                            <p className="mb-2 text-xs text-gray-400">Depending on selected payment method</p>

                            <hr className="my-4" />
                          </div>
                          <div className="flex items-center justify-between w-[40%]">
                            <button
                              type="button"
                              className="flex mb-2 w-[50%] p-2 justify-center border hover:bg-[#011027]"
                            >
                              Complete now
                            </button>
                            <p className="mb-2 text-xs text-gray-400">Complete step 2 to continue</p>

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
