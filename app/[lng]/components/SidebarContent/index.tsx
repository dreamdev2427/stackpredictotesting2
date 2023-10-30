import { DownloadIcon, StingIcon, TentArrowIcon, UploadIcon, UsersIcon } from '../../assets/images'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface SidebarContentProps {
  onLinkClick: (componentName: string) => void;
}
export default function Sidebarcontent() {
  return (
    <div>
      <aside className="w-[185px] fixed text-white top-[120px] overflow-auto">
        {/* Pass the component name to the onLinkClick function */}
        <Link href="my-accounts" className='flex flex-col items-center  no-underline text-white py-2.5 px-5 transition duration-300  hover:bg-[#203554] mb-[40px]'>
          <Image className="w-5 " src={UsersIcon} alt="Icon" />
          <span>My Accounts</span>
        </Link>
        <Link href="/deposit" className='flex flex-col items-center  no-underline text-white py-2.5 px-5 transition duration-300  hover:bg-[#203554] mb-[40px]'>
          <Image className="w-5 " src={DownloadIcon} alt="Icon" />
          <span>Deposit</span>
        </Link>
        <Link href="/desposits-withdrawal-transfers" className='flex flex-col items-center  no-underline text-white py-2.5 px-5 transition duration-300  hover:bg-[#203554] mb-[40px]'>
          <Image className="w-5 " src={DownloadIcon} alt="Icon" />
          <span>Transfers</span>
        </Link>
        <Link href="/withdrawal" className='flex flex-col items-center  no-underline text-white py-2.5 px-5 transition duration-300  hover:bg-[#203554] mb-[40px]'>
          <Image className="w-5 " src={UploadIcon} alt="Icon" />
          <span>Withdrawal</span>
        </Link>
        <Link href="/transaction-history" className='flex flex-col items-center   no-underline text-white py-2.5 px-5 transition duration-300  hover:bg-[#203554] mb-[40px]'>
          <Image className="w-6 " src={TentArrowIcon} alt="Icon" />
          <span className=''>Transaction History</span>
        </Link>
        <Link href="/settings" className='flex flex-col items-center  no-underline text-white py-2.5 px-5 transition duration-300  hover:bg-[#203554] mb-[40px]'>
          <Image className="w-5 " src={StingIcon} alt="Icon" />
          <span>Settings</span>
        </Link>
      </aside>
    </div>
  )
}
