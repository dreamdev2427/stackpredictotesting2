"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { classNames } from "../../utils";

interface NavLink {
  title: string;
  to: string;
  nestedNav?: NavLink[];
}

interface Props {
  setNestedList: (nestedList: NavLink[]) => void;
  setShowNested: (showNested: boolean) => void;
  lng: string;
}

const Nav: React.FC<Props> = ({ setNestedList, setShowNested, lng }) => {
  const path = usePathname();
  const router = useRouter();

  const handleMouseEnter = useCallback(
    (nestedNav: NavLink[] = []) => {
      //@ts-ignore
      setShowNested((prev) => !prev);
      if (nestedNav.length > 0) {
        setNestedList(nestedNav);
      }
    },
    [setNestedList, setShowNested]
  );

  return (
    <div className="">
    </div>
  );
};

export default Nav;
