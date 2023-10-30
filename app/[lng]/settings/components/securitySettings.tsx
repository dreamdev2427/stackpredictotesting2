import React from 'react'

export default function securitySettings() {
    return (
        <>
            <div className="w-full">

                <div className="header">
                    <h3 className="text-xl my-4">Authorization</h3>
                </div>

                <div className="">
                    <div className="my-6">
                        <p className="text-gray-400">Information for logging in to Wahoo Predict</p>
                        <p className="text-gray-400">Change your password whenever you think it might have been compromised.</p>
                    </div>

                    <div className="border items-center justify-between">
                        <div className="flex items-center p-6">
                            <label className="w-[100px]">Login</label>
                            <h4 className="w-[140px] text-center ml-[25%] mr-[40%]">example@gmail.com</h4>
                        </div>
                        <hr className="w-[97%] ml-6" />
                        <div className="w-full flex items-center p-6">
                            <label className="w-[100px]">Password</label>
                            <h4 className="w-[140px] text-center ml-[25%] mr-[40%]">***********</h4>
                            <a href="#" className="no-underline py-[10px] px-[16px] border rounded hover:bg-[#011027]">
                                Change
                            </a>
                        </div>
                    </div>
                    <h3 className="text-xl my-4">2- Step verification</h3>
                    <div className="my-6">
                        <p className="text-gray-400">2-step verification ensures that all sensitive transactions are authorized by you..</p>
                        <p className="text-gray-400">We encourage you to enter verification codes to confirm these transactions.</p>
                    </div>
                    <div className="box-security">
                        <div className="border items-center justify-between">
                            <div className="w-full flex items-center p-6">
                                <label className="w-[100px]">Security type</label>
                                <h4 className="w-[140px] text-center ml-[25%] mr-[40%]">Google Authenticator
                                </h4>
                                <a href="#" className="no-underline py-[10px] px-[16px] border rounded hover:bg-[#011027]">
                                    Change
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
