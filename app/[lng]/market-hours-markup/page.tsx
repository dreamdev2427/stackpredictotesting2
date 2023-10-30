"use client";

import React from 'react';
import { AlchemyIcon, Utila, FireBlocks, MetaMask } from '../assets/images'
import Image from 'next/image'

export const runtime = 'edge';

export default function MarketHoursMarkup() {


    return (
        <div className="container mx-auto p-8 text-white bg-[#203554] mb-10">

            <div>
                <div className="w-1/2 mb-20">
                    <h1 className="text-2xl font-bold mb-4">What are the market hours for forex currency pairs?
                    </h1>

                </div>

                <div className="w-[100%]">
                    <div className="flex items-center w-[100%] p-4 ">
                        <div className="flex items-center justify-between w-4/12">

                            <div className="w-1/6">
                                <h2 className='text-xl'>Instrument</h2>

                            </div>

                        </div>


                    </div>

                    <hr className="my-2" />

                    <div className="flex items-center w-[100%] p-4">

                        <div className="flex items-center w-4/12">
                            <h3 className="text-xl w-8/12">Forex</h3>
                            <p className="">Close</p>
                        </div>

                        <div className="flex items-center justify-between  w-4/12 mr">
                            <p>Friday</p>
                            <p className="mr-4">EDT 5:00 pm</p>
                        </div>



                    </div>


                    <hr className="my-2 ml-60" />

                    <div className="flex items-center w-[100%] p-4">

                        <div className="flex items-center w-4/12">
                            <h3 className="text-xl w-8/12"></h3>
                            <p className="">Open</p>
                        </div>

                        <div className="flex items-center justify-between  w-4/12 mr">
                            <p>Sunday</p>
                            <p className="mr-4">EDT 6:00 pm</p>
                        </div>



                    </div>


                </div>

                <div className="mt-10 w-[100%] bg-blue-500 p-4">
                    <p><span className="font-bold">Note:</span> Trading is unavailable on weekends.</p>
                </div>
            </div>

            <div>
                <div className="w-1/2 mb-20 mt-20">
                    <h1 className="text-2xl font-bold mb-4">What are the market hours for Stocks?

                    </h1>

                </div>

                <div className="w-[100%]">
                    <div className="flex items-center w-[100%] p-4 ">
                        <div className="flex items-center justify-between w-4/12">

                            <div className="w-1/6">
                                <h2 className='text-xl'>Instrument</h2>

                            </div>

                        </div>


                    </div>

                    <hr className="my-2" />

                    <div className="flex items-center w-[100%] p-4 ">

                        <div className="flex items-center w-4/12">
                            <h3 className="text-xl w-8/12">Most Stocks	</h3>
                            <p className="">Open</p>
                        </div>

                        <div className="flex items-center justify-between  w-4/12 mr">
                            <p>Daily (Monday - Friday)</p>
                            <p className="mr-4">EDT 9:30 am to 4:00 pm</p>
                        </div>


                    </div>


                    <hr className="my-2 ml-60" />

                    <div className="flex items-center w-[100%] p-4">

                        <div className="flex items-center w-4/12">
                            <h3 className="text-xl w-8/12"></h3>
                            <p className="">Close</p>
                        </div>

                        <div className="flex items-center justify-between  w-4/12 mr">
                            <p>Daily (Monday - Friday)</p>
                            <p className="mr-4">EDT 4:00 am to 9:30 pm</p>
                        </div>



                    </div>



                </div>
                <div className="mt-10 w-[100%] bg-blue-400 p-4 hidden">
                    <p>*10:00 to 13:40 GMT in summer and 11:00 to 14:40 in winter is only for closing open positions. No new positions for these stocks can be opened and modified during this time. Regular trading can be resumed from 13:40 GMT (14:40 in winter).</p>
                </div>
                <div className="mt-5 w-[100%] bg-blue-500 p-4">
                    <p><span className="font-bold">Note:</span> Trading is unavailable on weekends.</p>
                </div>
            </div>

            <div>
                <div className="w-1/2 mb-20 mt-20">
                    <h1 className="text-2xl font-bold mb-4">What are the market hours for Cryptocurrencies?

                    </h1>

                </div>

                <div className="w-[100%]">
                    <div className="flex items-center w-[100%] p-4 ">
                        <div className="flex items-center justify-between w-4/12">

                            <div className="w-1/6">
                                <h2 className='text-xl'>Instrument</h2>

                            </div>

                        </div>


                    </div>

                    <hr className="my-2" />

                    <div className="flex items-center w-[100%] p-4">

                        <div className="flex items-center w-4/12">
                            <h3 className="text-xl w-8/12">Cryptocurrencies*
                            </h3>
                        </div>

                        <div className="items-center text-center  w-8/12 mr">
                            <p>Open 24/7</p>

                        </div>



                    </div>



                    <div className="flex items-center w-[100%] p-4">

                        <div className="flex items-center w-4/12">
                            <h3 className="text-xl w-12/12"></h3>

                        </div>

                        <div className="items-center text-center  w-8/12 mr">
                            <p>(except during server maintenance hours)</p>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    );

}
