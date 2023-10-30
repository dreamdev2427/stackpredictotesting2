import { AlchemyIcon, BankeraPay, FireBlocks, FirebaseIcon, LockIcon } from '../assets/images'
import Sidebarcontent from '../components/SidebarContent'
import Image from 'next/image'
import React from 'react'

export const runtime = 'edge';


export default function Deposit() {
    return (

        <>
            <Sidebarcontent />
            {/* Main Content */}
            <div className="ml-[200px] bg-[#203554] mt-[30px] mr-[20px] text-white py-[30px] px-[50px] min-h-[500px]">

                <section className="deposit" id="deposit">

                    <div className="mb-[30px]">
                        <h2 className='text-3xl'>Deposit</h2>
                        <p className="mt-[50px]">Verification required</p>
                    </div>

                    <div className="justify-between flex items-center flex-wrap">

                        <div className="border p-[20px] mb-[20px] min-w-[48%] ">

                            <div className="flex items-center justify-between mb-[20px]">

                                <div className="flex items-center justify-between">

                                    <div className="w-[40px] mr-[20px]">
                                        <Image className="w-8" src={AlchemyIcon} alt="Icon" />
                                    </div>
                                    <h3 className="text-xl">AlchemyPay</h3>
                                </div>

                                <div className="right-side ">
                                    <div className="w-[30px] h-[30px] bg-[#1da91d] rounded-full flex justify-center items-center">
                                        <Image className="w-4" src={LockIcon} alt="Icon" />
                                    </div>
                                </div>
                            </div>
                            <hr className="w-[85%] ml-8 justify-center" />
                            <div className="text-gray-500 mt-4">

                                <p>Processing time instant - 30 minutes</p>
                                <p>Fee 0%</p>
                                <p>Limits 10 - 15,000 USD</p>

                            </div>
                        </div>

                        <div className="border p-[20px] mb-[20px] min-w-[48%] ">

                            <div className="flex items-center justify-between mb-[20px]">

                                <div className="flex items-center justify-between">

                                    <div className="w-[40px] mr-[20px]">
                                        <Image className="w-8" src={FireBlocks} alt="Icon" />
                                    </div>
                                    <h3 className="text-xl">Fireblocks</h3>
                                </div>

                                <div className="right-side ">
                                    <div className="w-[30px] h-[30px] bg-[#1da91d] rounded-full flex justify-center items-center">
                                        <Image className="w-4" src={LockIcon} alt="Icon" />
                                    </div>
                                </div>
                            </div>
                            <hr className="w-[85%] ml-8 justify-center" />
                            <div className="text-gray-500 mt-4">

                                <p>Processing time instant - 30 minutes</p>
                                <p>Fee 0%</p>
                                <p>Limits 10 - 15,000 USD</p>

                            </div>
                        </div>

                        <div className="border p-[20px] mb-[20px] min-w-[48%] ">

                            <div className="flex items-center justify-between mb-[20px]">

                                <div className="flex items-center justify-between">

                                    <div className="w-[40px] mr-[15px]">
                                        <Image className="w-4" src={BankeraPay} alt="Icon" />
                                    </div>
                                    <h3 className="text-xl">BankeraPay</h3>
                                </div>

                                <div className="right-side ">
                                    <div className="w-[30px] h-[30px] bg-[#1da91d] rounded-full flex justify-center items-center">
                                        <Image className="w-4" src={LockIcon} alt="Icon" />
                                    </div>
                                </div>
                            </div>
                            <hr className="w-[85%] ml-8 justify-center" />
                            <div className="text-gray-500 mt-4">

                                <p>Processing time instant - 30 minutes</p>
                                <p>Fee 0%</p>
                                <p>Limits 10 - 15,000 USD</p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
