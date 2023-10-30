"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { DollarIcon, SquareUser } from '../../assets/images';
import VerificationStep1 from './VerificationStep1';
import VerificationStep2 from './VerificationStep2';
import VerificationStep3 from './VerificationStep3';
import { LNG } from '../../../../src/@types/generic';

export const runtime = 'edge';


// export default function Profile() {
const Profile: React.FC<LNG> = ({ lng }) => {

    const dispatch = useDispatch();

    const renderSearchButton = () => (
        <>

        </>
    );

    const renderLoginButton = () => (
        <div className="mx-2">
        </div>
    );
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="content">
                <div className="header">
                    <h3 className="text-xl my-6">Account</h3>
                </div>

                <div className="justify-between flex items-center">
                    <div className="border py-[20px] px-[40px] justify-between flex items-center w-[48%]">
                        <div className="justify-between flex items-center">
                            <div className="box-icon">
                                <Image className="w-6" src={SquareUser} alt="" />
                            </div>
                            <div className="ml-[40px]">
                                <h5 className="text-base">Verification status</h5>
                                <h3 className="text-red-600 text-2xl">Not Verified</h3>
                                <p className="text-gray-400 text-sm">0/3 steps complete</p>
                            </div>
                        </div>
                        <div className="right-side">
                            <a href="#" className="no-underline py-[10px] px-[16px] border rounded hover:bg-[#011027]">
                                Complete now
                            </a>
                        </div>
                    </div>

                    <div className="border py-[20px] px-[40px] justify-between flex items-center w-[48%]">
                        <div className="justify-between flex items-center">
                            <div className="box-icon">
                                <Image className="w-6" src={DollarIcon} alt="" />
                            </div>
                            <div className="ml-[40px]">
                                <h5 className="text-base">Deposit limit</h5>
                                <h3 className="text-2xl">0 USD</h3>
                                <p className="text-gray-400 text-sm">Verify your account to unlock limits</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-xl my-6">Verification steps</h3>
                    <div className="mr-5 pointer  items-center">
                        {renderSearchButton()}
                        {renderLoginButton()}
                        {/* {renderLiveStreamButton()} */}
                        <VerificationStep1 lng={lng} />

                        {renderSearchButton()}
                        {renderLoginButton()}
                        {/* {renderLiveStreamButton()} */}
                        <VerificationStep2 lng={lng} />

                        {renderSearchButton()}
                        {renderLoginButton()}
                        {/* {renderLiveStreamButton()} */}
                        <VerificationStep3 lng={lng} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
