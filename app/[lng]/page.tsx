// @ts-nocheck
"use client";

import React, { useState } from "react";
import Link from "next/link";
import ContentService from "@contentfulClient";
import HomeBanner from "./components/HomePage/HomeBanner";
import Header from "./components/Header";
import Sidebarcontent from "./components/SidebarContent";
import { AlchemyIcon, BankeraPay, DollarIcon, FirebaseIcon, ListIcon, ListVerticalIcon, LockIcon, PlusIcon, SquareUser, ellipsisIcon } from "./assets/images";
import Image from "next/image";
import MyAccounts from "./my-accounts/page";
import Deposit from "./deposit/page";
import Withdrawal from "./withdrawal/page";
import TransactionHistory from "./transaction-history/page";
import Settings from "./settings/page";
import Login from "./components/login/page";
import TickHistory from "./tick-history/page";

export const runtime = 'edge';

export const revalidate = 10;

interface HomePageProps {
  params: {
    lng: string;
  };
}

interface VideosFilterHandlerProps {
  videosList: any[];
  matchType: string;
}

async function Page({ params: { lng } }: HomePageProps) {
  const [selectedComponent, setSelectedComponent] = React.useState("none");

  // Function to handle link clicks and update the selectedComponent state
  const handleLinkClick = (componentName: string) => {
    setSelectedComponent(componentName);
  };

  return (
    <>
      {/* <Sidebarcontent />
      <div className="ml-[200px] bg-[#203554] mt-[30px] mr-[20px] text-white py-[30px] px-[50px] min-h-[500px]">
      </div> */}
      <MyAccounts />
      {/* <TickHistory /> */}
    </>
  );
}

export default Page;
