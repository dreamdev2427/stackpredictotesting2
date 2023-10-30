"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import useBreakpoints from "../../hooks/useBreakpoints";

import { classNames } from "../../utils";

import { toggleModal } from "../../store/Features/auth/authSlice";
import { LNG } from "../../../../src/@types/generic";

import Nav from "./Nav";
import UserDropdown from "./UserDropdown";
import LanguageSelectBox from "./LanguageSelectBox";
import { BellIcon, InfoIcon, languageIcon, UserIcon, UsersIcon } from "../../assets/images";
import { Select } from "flowbite-react";
import TradingAccount from "./TradingAccount";
import InfoUser from "./InfoUser";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";

interface NavLink {
  title: string;
  to: string;
}

interface Link {
  title: string;
  to: string;
  nestedNav?: NavLink[];
}

const Header: React.FC<LNG> = ({ lng }) => {
  const searchQuery = useSearchParams().get("q");
  const [showNested, setShowNested] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [nestedList, setNestedList] = useState<NavLink[]>([]);
  const { isXs, isSm, isMd, isLg } = useBreakpoints();
  const auth =
    typeof window !== "undefined" && window.localStorage.getItem("email");

  const dispatch = useDispatch();

  const renderSearchButton = () => (
    <>

    </>
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderLoginButton = () => (
   <>
      
   </>
  );

  return (
    <>
      {/* Header Content */}
      <div className="flex items-center justify-between my-8 px-10 w-full">

        <div className="logo">
          <h1 className="text-2xl m-0 text-white font-bold"><span className="text-blue-500">WAHOO</span>PREDICT</h1>
        </div>

        <div className="flex items-center text-white justify-between w-[35%] ">
          <div className=" pointer flex items-center">
            {/* {renderSearchButton()}
            {renderLoginButton()} */}
            <TradingAccount lng={lng} />
          </div>

          <div className="border border-blue-500 bg-blue-500 bg-opacity-30 px-4 py-2 rounded pointer flex items-center">
            <button type="submit">
              connect wallet
            </button>
          </div>

          <div className=" pointer flex items-center ">
            <LanguageSelectBox lng={lng} />

          </div>

          <div className=" pointer flex items-center">
            <InfoUser lng={lng} />
          </div>

          <div className=" pointer flex items-center">
            <Notifications lng={lng} />
          </div>

          <div className=" pointer flex items-center">
            <UserMenu lng={lng} />
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
