import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { RootState } from "../../store";
import { classNames } from "../../utils";
import Image from "next/image";

export default function UserDropdown() {
  const { authInfo } = useSelector((state: RootState) => state.auth);
  return (
    <Menu
      as="div"
      className="relative inline-block text-left bg-base-black border border-base-gray rounded"
    >
    </Menu>
  );
}
