"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { InfoIcon, languageIcon, ListVerticalIcon } from "../../assets/images";
import { i18n } from "@i18n/settings";
import { useRouter } from "next/navigation";
import { LNG } from "../../../../src/@types/generic";
import { classNames } from "../../utils";
import useBreakpoints from "@/hooks/useBreakpoints";
import Link from 'next/link';

export default function InfoUser({ lng }: LNG): JSX.Element {
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
                  <Image className="w-5 mr-2" src={InfoIcon} alt="Icon" />
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
              <Listbox.Options className=" absolute top-24 right-[10rem] z-20 overflow-auto w-[25%] border border-base-gray flex flex-col items-center justify-between bg-[#203554] ">
                <Listbox.Option
                  key={''}
                  className="cursor-pointer select-none px-4  w-full"
                  value={''}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center mb-[10px]">
                        <span
                          className="w-full"
                        >
                          <div className="my-4 text-gray-400 p-2">

                            <Link href="/currency-converter" className='flex mb-2 w-full p-2 hover:bg-[#011027] text-white'>
                              <span> Currency Converter</span>
                            </Link>

                            <Link href="/tick-history" className='flex mb-2 w-full p-2 hover:bg-[#011027] text-white'>
                              <span> Tick History</span>
                            </Link>

                            <Link href="/market-hours-markup" className='flex mb-2 w-full p-2 hover:bg-[#011027] text-white'>
                              <span> Market Hours Markup</span>
                            </Link>

                            <Link href="/desposits-withdrawal-transfers" className='flex mb-2 w-full p-2 hover:bg-[#011027] text-white'>
                              <span>Transfers: Deposits and Withdrawals</span>
                            </Link>


                            <Link href="/help-center" className='flex mb-2 w-full p-2 hover:bg-[#011027] text-white'>
                              <span> Help Center</span>
                            </Link>

                            <Link href="/suggest-feature" className='flex mb-2 w-full p-2 hover:bg-[#011027] text-white'>
                              <span> Suggest a Feature</span>
                            </Link>


                            <Link href="/archive" className='flex mb-2 w-full p-2 hover:bg-[#011027] text-white'>
                              <span> Archive your Account</span>
                            </Link>


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
