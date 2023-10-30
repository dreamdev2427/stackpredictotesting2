"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { AvatarIcon1, UserIcon, languageIcon } from "../../assets/images";
import { i18n } from "@i18n/settings";
import { useRouter } from "next/navigation";
import { LNG } from "../../../../src/@types/generic";
import { classNames } from "../../utils";
import useBreakpoints from "@/hooks/useBreakpoints";
import AvatarGallery from "./AvatarGallery"; // Import the AvatarGallery component
import UserDropdown from "./UserDropdown";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/store/Features/auth/authSlice";
import Link from 'next/link';


const auth =
  typeof window !== "undefined" && window.localStorage.getItem("email");


export default function UserMenu({ lng }: LNG): JSX.Element {
  const router = useRouter();
  const { isXs, isSm, isMd, isLg, active } = useBreakpoints();
  const dispatch = useDispatch();


  // State to manage selected avatar
  const [selectedAvatar, setSelectedAvatar] = useState(AvatarIcon1);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false); // State to control the AvatarGallery visibility

  // Function to handle avatar selection
  const handleAvatarChange = (newAvatar: string) => {
    setSelectedAvatar(newAvatar);
    setIsGalleryOpen(false); // Close the AvatarGallery when an avatar is selected
  };

  // Function to open the AvatarGallery
  const openAvatarGallery = () => {
    setIsGalleryOpen(true);
  };


  return (
    <Listbox value={lng.toUpperCase()} onChange={(value) => router.push(value)}>
      {({ open }) => (
        <>
          <div className="">
            <Listbox.Button className="relative cursor-default flex items-center">
              <div className="flex items-center ml-1">
                {isXs || isSm ? null : (
                  <span className="block truncate">
                    {/* Clicking on this image will open the AvatarGallery */}
                    <Image
                      className="w-12 mr-2 rounded-full"
                      src={selectedAvatar} // Display the selected avatar
                      alt="Icon"
                    />
                  </span>
                )}
              </div>
            </Listbox.Button>

            <Transition
              show={open || isGalleryOpen} // Show AvatarGallery when open or when isGalleryOpen is true
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className=" absolute top-24 right-[3rem] z-20 overflow-auto w-[25%]   border border-base-gray flex flex-col items-center justify-between bg-[#203554] ">
                <Listbox.Option key={''} className="cursor-pointer select-none px-4  w-full" value={''}>
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center mb-[10px]">
                        <span className="w-full">
                          <div className="my-4 text-gray-400 p-2  ">
                            <div className="justify-center flex">
                              <Image className="w-20 rounded-full   " src={selectedAvatar} alt="Icon"
                                onClick={openAvatarGallery} // Open the AvatarGallery on click

                              />
                            </div>
                            <p className="my-2 justify-center flex">example@gmail.com</p>
                            <hr className="" />
                          </div>
                          <div className="">
                            <Link href="/settings" className='flex mb-2 w-full p-2 hover:bg-[#011027] text-white'>
                              <span>Settings</span>
                            </Link>
                            <Link href="/trading" className='flex mb-2 w-full p-2 hover:bg-[#011027] text-white'>
                              <span>Trading</span>
                            </Link>
                            <hr className="" />
                          </div>

                          <div className="">
                            {/* <button type="button" className="flex mb-2 w-full p-2 hover:bg-[#011027]">
                              Sign Out
                            </button> */}
                            {!auth ? (
                              <button
                                onClick={() =>
                                  auth ? console.log("Logged in") : dispatch(toggleModal())
                                }
                                className="flex mb-2 w-full p-2 hover:bg-[#011027]"
                              >
                                Sign Out

                              </button>
                            ) : (
                              <UserDropdown />
                            )}
                          </div>
                        </span>
                      </div>
                    </>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
          {isGalleryOpen && (
            <AvatarGallery
              selectedAvatar={selectedAvatar}
              setSelectedAvatar={handleAvatarChange}
            />
          )}
        </>
      )}
    </Listbox>
  );
}
