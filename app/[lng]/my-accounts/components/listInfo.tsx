import { ellipsisIcon } from '@/assets/images';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import DropdownSort from './DropdownSort';
import DropdownDots from "./Dropdowndots";

export default function ListInfo() {

  return (
    <>
      <div className="border p-[20px] mt-[40px]" id="list-view">
        <div className="flex items-center mt-[20px]">
          <span> <span className=" "></span> 561635161</span>
        </div>

        <div className="items-center flex justify-between mt-[20px] mr-[30px]">
          <p>0.00 USD</p>
          <div className="w-[30%] flex justify-between items-center" >
            <Link href="/deposit" className='no-underline py-[10px] px-[16px] border rounded hover:bg-[#011027]' id="deposit">
              <i className="fa-solid fa-download"></i> Deposit
            </Link>

            <Link href="/withdrawal" className='no-underline py-[10px] px-[16px] border rounded hover:bg-[#011027]' id="withdrawal">
              <i className="fa-solid fa-download"></i> Withdrawal
            </Link>

            <Link href="/trading" className='no-underline py-[10px] px-[16px] border rounded hover:bg-[#011027]' id="trading">
              <i className="fa-solid fa-download"></i> Trade
            </Link>


            <div className=" pointer flex items-center">
              <DropdownDots />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
