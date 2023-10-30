"use client";

import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface DropdownProps {
    options: { value: string; label: string }[];
    label: string;
}

export default function DropdownSort({ options, label }: DropdownProps): JSX.Element {
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectChange = (value: string) => {
        setSelectedOption(value);
    };

    return (
        <div className="relative w-[8rem]">
            <div className=" w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                    className="bg-transparent appearance-none border-b-2 border-gray-400 p-2 w-full flex justify-between items-center"
            >
                {selectedOption}
                <ChevronDownIcon
                    className="h-5 w-5 text-base-gray pointer-events-none"
                    aria-hidden="true"
                />
            </button>
            </div>
            <Listbox as="div" className="z-20 absolute top-12">
                <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    
                    <Listbox.Options className="py-1 mt-2 bg-[#011027]  border-gray-300 rounded shadow-l w-[12rem]">
                        {options.map((option) => (
                            <Listbox.Option
                                key={option.value}
                                value={option.value}
                            >
                                {({ active, selected }) => (
                                    <div
                                        className={`${active
                                            ? "bg-blue-600 text-white"
                                            : "text-white"
                                            } cursor-pointer select-none relative px-4 py-4 `}
                                        onClick={() => {
                                            handleSelectChange(option.value);
                                            setIsOpen(false);
                                        }}
                                    >
                                        
                                        {option.label}

                                    </div>
                                )}

                            </Listbox.Option>
                        ))}

                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    );
}

