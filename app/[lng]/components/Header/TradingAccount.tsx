"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { languageIcon } from "../../assets/images";
import { i18n } from "@i18n/settings";
import { useRouter } from "next/navigation";
import { LNG } from "../../../../src/@types/generic";
import { classNames } from "../../utils";
import useBreakpoints from "@/hooks/useBreakpoints";
import Link from 'next/link';

export default function TradingAccount({ lng }: LNG): JSX.Element {
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

                {isXs || isSm ? null : <span className="block truncate">0.00 USD</span>}
                <ChevronDownIcon
                  className="h-5 w-5 text-base-gray pointer-events-none"
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
              <Listbox.Options className=" absolute top-24 right-[27.5rem] z-20 overflow-auto w-[25%]   border border-base-gray flex flex-col items-center justify-between bg-[#203554] ">
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
                            <p className="mb-2">Trading Account</p>
                            <p className="mb-2">#44435646</p>
                            <p className="mb-2">0.00 USD</p>
                            <hr className="" />

                          </div>
                          <div className="">

                            <Link href="/deposit" className='flex mb-2 w-full p-2 hover:bg-[#011027]'>
                              <span>Deposit</span>
                            </Link>
                            <Link href="/withdrawal" className='flex mb-2 w-full p-2 hover:bg-[#011027]'>
                              <span>Withdraw</span>
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
