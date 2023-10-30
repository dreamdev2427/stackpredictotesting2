import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface DropdownProps {
    options: { value: string; label: string }[];
    label: string;
}

export default function Dropdown({ options, label }: DropdownProps): JSX.Element {
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Listbox
                as="div"
                className="bg-transparent justify-between flex items-center rounded appearance-none border p-2 w-full"
                value={selectedOption}
                onChange={(newValue) => {
                    setSelectedOption(newValue);
                    setIsOpen(false); // Close the current dropdown when a new option is selected
                }}
            >
                {({ open }) => (
                    <>
                        <div className="w-full relative">
                            <Listbox.Button
                                className="bg-transparent justify-between flex items-center rounded-lg appearance-none  w-full "
                            >
                                {selectedOption}
                                <ChevronDownIcon className="w-5 text-base-gray pointer-events-none" aria-hidden="true" />
                            </Listbox.Button>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <div className="relative">
                                    <Listbox.Options className="py-1 bg-[#203554] border-gray-300 rounded shadow-lg absolute w-full">
                                        <div
                                            className="max-h-40 overflow-y-auto"
                                        // Adjust the max-h-40 value to control the max height before scrolling is applied
                                        >
                                            {options.map((option) => (
                                                <Listbox.Option key={option.value} value={option.value}>
                                                    {({ active, selected }) => (
                                                        <div
                                                            className={`${active ? "text-white" : "text-white"
                                                                } cursor-pointer select-none relative px-4 py-2 ${selected ? "bg-blue-600" : ""
                                                                }`}
                                                        >
                                                            {option.label}
                                                        </div>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </div>
                                    </Listbox.Options>
                                </div>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    );
}
