"use client";

import React, { useState } from 'react';

export const runtime = 'edge';
const categories = [
    'All ideas',
    'My feedback',
    'Crypto',
    'Dollar Wallet',
    'Trading Terminals',
    'Mobile App',
    'New Payment requests',
    'Portfolio Investment Management & Social Trading',
    'Trading Conditions',
    'Web Personal Area',
    'Website',
];

const categoriesStatus = [
    'Under review (647)',
    'Needs more details (16)',
    'Planned (31)',
    'Working on it (24)',
    'Completed (167)',
    'Declined (23)',
];
export default function SuggestFeature() {


    return (
        <div className=" h-screen text-white ml-10">
            <div className="text-left py-4">
                <div className="text-2xl py-2">Trading with WahooPredict</div>
                <div className="text-3xl font-bold py-2">What should WahooPredict do to improve your trading experience?</div>
                <div className='py-4'>We will review every idea that you post.</div>
            </div>
            <div className="flex">
                <div className="w-8/12 p-4">
                    <input
                        type="text"
                        className="w-full border p-2 rounded bg-transparent mb-10"
                        placeholder="Enter your idea"
                    />
                    <div className="flex space-x-4 mt-10">
                        <button className="border p-2 hover:bg-blue-500  w-2/12">HOT</button>
                        <button className="border p-2 hover:bg-blue-500  w-2/12">TOP</button>
                        <button className="border p-2 hover:bg-blue-500  w-2/12">NEW IDEAS</button>
                        <div className="border-b relative w-3/12">
                            <span className=" px-2">CATEGORY</span>
                            <select className="absolute opacity-0 top-0 left-0 w-full h-full  focus:bg-[#011027]">
                                {categories.map((category, index) => (
                                    <option key={index}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div className="border-b relative w-3/12">
                            <span className="px-2">STATUS</span>
                            <select className="absolute opacity-0 top-0 left-0 w-full h-full  focus:bg-[#011027]">
                                {categoriesStatus.map((status, index) => (
                                    <option key={index}>{status}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-4/12 p-4">
                    <div className="text-2xl font-bold">CATEGORIES</div>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index} className="hover:bg-blue-500 p-2 cursor-pointer">
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

}
