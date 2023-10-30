"use client";

import React from 'react';
import { AlchemyIcon, Utila, FireBlocks, MetaMask } from '../assets/images'
import Image from 'next/image'

export const runtime = 'edge';

export default function DespositsAndWithdrawalTransfers() {


    return (
        <div className="container mx-auto p-8 text-white bg-[#203554] mb-10">
            <div className="w-1/2">
                <h1 className="text-2xl font-bold mb-4">Transfers: Deposits and Withdrawals</h1>
                <p className="mb-8">
                    Choose from flexible payment methods including the worlds most popular onramp and offramp solutions                </p>
            </div>
            <div className="w-[100%]">
                <div className="flex items-center w-[100%] p-4 ">
                    <div className="flex items-center justify-between w-4/12">

                        <div className="w-1/6">

                        </div>
                        <div className="w-5/6">

                        </div>

                    </div>
                    <div className="w-2/12">
                        <h2 className='text-xl mb-2'>Deposit</h2>
                        <p className='text-xs'>Minimum amount</p>
                    </div>
                    <div className="w-2/12">
                        <h2 className='text-xl mb-8'></h2>
                        <p className='text-xs'>Speed</p>
                    </div>
                    <div className="w-2/12">
                        <h2 className='text-xl mb-2'>Withdrawal</h2>
                        <p className='text-xs'>Minimum amount</p>
                    </div>
                    <div className="w-2/12">
                        <h2 className='text-xl mb-8'></h2>
                        <p className='text-xs'>Speed</p>
                    </div>
                </div>

                <hr className="my-2" />

                <div className="flex items-center w-[100%] p-4">
                    <div className="flex items-center justify-between w-4/12">

                        <div className="w-1/6">
                            <Image className="w-8" src={AlchemyIcon} alt="Icon" />
                        </div>
                        <div className="w-5/6">
                            <h3 className="text-xl">AlchemyPay</h3>
                        </div>

                    </div>
                    <div className="w-2/12">
                        <p>$10</p>
                    </div>
                    <div className="w-2/12">
                        <p>within 30 minutes</p>
                    </div>
                    <div className="w-2/12">
                        <p>$10</p>
                    </div>
                    <div className="w-2/12">
                        <p>within 24 hours</p>
                    </div>
                </div>

                <hr className="my-2" />

                <div className="flex items-center w-[100%] p-4">
                    <div className="flex items-center justify-between w-4/12">

                        <div className="w-1/6">
                            <Image className="w-8" src={FireBlocks} alt="Icon" />
                        </div>
                        <div className="w-5/6">
                            <h3 className="text-xl">FireBlocks</h3>
                        </div>

                    </div>
                    <div className="w-2/12">
                        <p>$10</p>
                    </div>
                    <div className="w-2/12">
                        <p>within 30 minutes</p>
                    </div>
                    <div className="w-2/12">
                        <p>$10</p>
                    </div>
                    <div className="w-2/12">
                        <p>within 24 hours</p>
                    </div>
                </div>

                <hr className="my-2" />

                <div className="flex items-center w-[100%] p-4">
                    <div className="flex items-center justify-between w-4/12">

                        <div className="w-1/6">
                            <Image className="w-8" src={MetaMask} alt="Icon" />
                        </div>
                        <div className="w-5/6">
                            <h3 className="text-xl">MetaMask</h3>
                        </div>

                    </div>
                    <div className="w-2/12">
                        <p>$10</p>
                    </div>
                    <div className="w-2/12">
                        <p>within 30 minutes</p>
                    </div>
                    <div className="w-2/12">
                        <p>$10</p>
                    </div>
                    <div className="w-2/12">
                        <p>within 24 hours</p>
                    </div>
                </div>
                <hr className="my-2" />
                <div className="flex items-center w-[100%] p-4">
                    <div className="flex items-center justify-between w-4/12">

                        <div className="w-1/6">
                            <Image className="w-12" src={Utila} alt="Icon" />
                        </div>
                        <div className="w-5/6">
                            <h3 className="text-xl">Utila</h3>
                        </div>

                    </div>
                    <div className="w-2/12">
                        <p>$10</p>
                    </div>
                    <div className="w-2/12">
                        <p>within 30 minutes</p>
                    </div>
                    <div className="w-2/12">
                        <p>$10</p>
                    </div>
                    <div className="w-2/12">
                        <p>within 24 hours</p>
                    </div>
                </div>
                <hr className="my-2" />
            </div>
        </div>
    );

}
