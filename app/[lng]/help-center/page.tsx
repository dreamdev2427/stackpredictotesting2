"use client";

import React from 'react';

export const runtime = 'edge';

export default function HelpCenter() {
    return (
        <div className="text-white p-4 mx-10">
            {/* Section 1 */}
            <div className="text-center">
                <h1 className="text-4xl font-bold">WahooPredict Help Center</h1>
            </div>

            {/* Section 2 */}
            <div className="text-center mt-4">
                <p>We have got the answers you need</p>
            </div>

            {/* Section 3 - Search Box */}
            <div className="w-1/2 mx-auto mt-4">
                <input
                    type="text"
                    className="w-full bg-transparent text-white border-b-2 border-white rounded-2xl"
                    placeholder="Search..."
                />
            </div>

            {/* Section 4 - Popular Links */}
            <div className="w-1/2 mx-auto my-10">
                <p>
                    Popular articles: <a href="#" className="hover:underline text-blue-500">What are trading hours for all instruments?</a>,{' '}
                    <a href="#" className="hover:underline text-blue-500">What security features are provided to WahooPredict accounts?</a>
                </p>
            </div>

            {/* Section 5 - Buttons */}
            <div className="w-full mt-4 justify-center">
                <div className="flex space-x-4">
                    <button className="w-1/3 border hover:bg-blue-500 text-white px-5 py-5">Getting Started</button>
                    <button className="w-1/3 border hover:bg-blue-500 text-white px-5 py-5">Personal Area</button>
                    <button className="w-1/3 border hover:bg-blue-500 text-white px-5 py-5">Payment Systems</button>
                </div>
                <div className="flex space-x-4 mt-4 mb-10">
                    <button className="w-1/3 border hover:bg-blue-500 text-white px-5 py-5">Trading</button>
                    <button className="w-1/3 border hover:bg-blue-500 text-white px-5 py-5">VPN</button>
                    <button className="w-1/3 border hover:bg-blue-500 text-white px-5 py-5">Is something not working</button>
                </div>
            </div>

            {/* Section 6 - Documentation and Troubleshooting Shortcuts */}
            <div className="mt-4 flex space-x-4 my-10">
                {/* Left Side */}
                <div className="w-1/2">
                    <h2 className="text-xl font-bold border-b mb-4 pb-4">Documentation shortcuts</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                Are swap-free trading accounts available in non-Islamic countries?
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                How do I completely verify my WahooPredict account?
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                What is margin?
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                How do I start trading with WahooPredict?
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                What should I know about withdrawals?
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Side */}
                <div className="w-1/2">
                    <h2 className="text-xl font-bold border-b mb-4 pb-4">Troubleshooting shortcuts</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                How do I recover a lost password?
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                Why has not my deposit been credited to my account yet?
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                What do I do if my withdrawal fails?
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                Why is an error preventing me from trading?
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline text-blue-500">
                                Why is my trading terminal showing an Authorization failed error?
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
