"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { Option, Select } from '@material-tailwind/react';
import { ListIcon, ListVerticalIcon, PlusIcon, ellipsisIcon } from '../assets/images'
import Sidebarcontent from '../components/SidebarContent'
import ListInfo from './components/listInfo'
import ListVerticaInfo from './components/listVerticaInfo'
import DropdownSort from './components/DropdownSort';

export const runtime = 'edge';




export default function MyAccounts() {
  
  const [selectedComponent, setSelectedComponent] = useState('listInfo'); // Initialize with the component you want to show by default

  const handleListInfoClick = () => {
    setSelectedComponent('listInfo');
  };

  const handleListVerticalInfoClick = () => {
    setSelectedComponent('listVerticalInfo');
  };

  const sort = [
    { value: 'Newest', label: 'Newest' },
    { value: 'Oldest', label: 'Oldest' },

  ];


  return (
    <>
      <Sidebarcontent />
      {/* Main Content */}
      <div className="ml-[200px] bg-[#203554] mt-[30px] mr-[20px] text-white py-[30px] px-[50px] min-h-[500px]">

        <section className="my-account" id="my-account">

          <div className="flex justify-between items-center">
            <h2 className="text-3xl">My Accounts</h2>
            <a href="#" className="no-underline  py-[10px] px-[25px] border  border-white  rounded text-white flex hover:bg-[#011027] ">
              <Image className="w-4 mr-6 " src={PlusIcon} alt="Icon" />
              Open New Account
            </a>
          </div>

          <nav className="my-[20px] mx-[0px]">
            <a className="no-underline mr-[20px] text-gray-400" href="#" id="real">Real</a>
          </nav>
          <hr className="w-full text-gray-700" />

          <div className="flex items-center mt-[20px] justify-between">
            <div className='flex items-center '>
              <label className="mr-[10px]">Sort:</label>
              <DropdownSort options={sort} label="Days" />
            </div>
            <div className="flex items-center border">
              <a href="#" className="no-underline py-[10px] px-[16px] text-white hover:bg-[#011027]" onClick={handleListInfoClick}>
                <Image className="w-5" src={ListIcon} alt="Icon" />
              </a>
              <div className="vertical-line"></div>
              <a href="#" className="no-underline py-[10px] px-[16px] text-white hover:bg-[#011027]" onClick={handleListVerticalInfoClick}>
                <Image className="w-5" src={ListVerticalIcon} alt="Icon" />
              </a>
            </div>
          </div>
            {selectedComponent === 'listInfo' && <ListInfo />}
            {selectedComponent === 'listVerticalInfo' && <ListVerticaInfo />}
        </section>
      </div>
    </>

  )
}
