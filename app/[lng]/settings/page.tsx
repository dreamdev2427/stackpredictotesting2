
"use client";
import React from 'react'; // Add this import statement for React
import Link from 'next/link';
import SecuritySettings from './components/securitySettings'; // Import the securitySettings component
import { useState } from 'react';
import Sidebarcontent from '../components/SidebarContent';
import Profile from './components/profile';

export const runtime = 'edge';

export default function Settings() {
    const [showProfile, setShowProfile] = useState(true); // State variable to control the visibility of Profile

    return (
        <>
            <Sidebarcontent />
            {/* Main Content */}
            <div className="ml-[200px] bg-[#203554] mt-[30px] mr-[20px] text-white py-[30px] px-[50px] min-h-[500px] mb-12">


                <section className="settings" id="settings">
                    <div className="header">
                        <h2 className='text-3xl'>Settings</h2>
                    </div>
                    <nav className="my-[20px]">
                        <Link
                            href="/settings"
                            className={`no-underline mr-[20px] text-gray-400 hover:pb-[20px] hover:text-blue-500 hover:border-b-2 border-blue-500 ${showProfile ? 'text-blue-500 border-b-2' : ''
                                }`}
                            onClick={() => setShowProfile(true)} // Show Profile component when the link is clicked
                        >
                            Profile
                        </Link>
                        <Link
                            href="/settings"
                            className={`no-underline mr-[20px] text-gray-400 hover:pb-[20px] hover:text-blue-500 hover:border-b-2 border-blue-500 ${!showProfile ? 'text-blue-500 border-b-2' : ''
                                }`}
                            onClick={() => setShowProfile(false)} // Show SecuritySettings component when the link is clicked
                        >
                            Security settings
                        </Link>
                    </nav>
                    <hr />
                </section>

                {showProfile && <Profile lng='' />} {/* Render Profile component if showProfile is true */}
                {!showProfile && <SecuritySettings />} {/* Render SecuritySettings component if showProfile is false */}
            </div>
        </>
    );
}
