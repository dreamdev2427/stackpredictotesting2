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

export default function LanguageSelectBox({ lng }: LNG): JSX.Element {
  const router = useRouter();
  const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

  return (
    <Listbox value={lng.toUpperCase()} onChange={(value) => router.push(value)}>
      {({ open }) => (
        <>
          <div className="">
            <Listbox.Button className="relative cursor-default flex items-center ">
              <Image src={languageIcon} alt="" className="w-4" />
              <div className="flex items-center ml-1">

                {isXs || isSm ? null : (
                  <span className="block truncate">{lng.toUpperCase().slice(0, 2)}</span>
                )}
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
              <Listbox.Options className="absolute top-24 right-[13rem] z-20 overflow-auto py-4  border border-base-gray flex flex-col items-center justify-between bg-[#203554]  ">
                {i18n.locales.map((item) => (
                  <Listbox.Option
                    key={item}
                    className="cursor-pointer select-none px-4 hover:bg-[#011027] w-full"
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center mb-[10px]">
                          <span
                            className={classNames(
                              selected
                                ? "font-semibold text-base-yellow"
                                : "font-normal",
                              "block truncate"
                            )}
                          >
                            {item}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
