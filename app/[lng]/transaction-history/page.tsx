"use client";

import Sidebarcontent from '../components/SidebarContent'
import React, { useState } from 'react'
import Dropdown from './components/Dropdown';


export const runtime = 'edge';



export default function TransactionHistory() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const daysOptions = [
        { value: '3-days', label: 'Last 3 days' },
        { value: '7-days', label: 'Last 7 days' },
        { value: '30-days', label: 'Last 30 days' },
        { value: '3-months', label: 'Last 3 months' },
    ];

    const transactionTypeOptions = [
        { value: 'All transaction type', label: 'All transaction type' },
        { value: 'Deposit', label: 'Deposit' },
        { value: 'Withdrawal', label: 'Withdrawal' },
        { value: 'Transfer', label: 'Transfer' },
        { value: 'Refund', label: 'Refund' },
        { value: 'Reward', label: 'Reward' },
        { value: 'Rebate', label: 'Rebate' },

    ];

    const statusesOptions = [
        { value: 'All statuses', label: 'All statuses' },
        { value: 'Processing', label: 'Processing' },
        { value: 'Done', label: 'Done' },
        { value: 'Rejected', label: 'Rejected' },

    ];

    const accountsViewOptions = [
        { value: 'All accounts', label: 'All accounts' },

    ];


    return (
        <>
            <Sidebarcontent />
            {/* Main Content */}
            <div className="ml-[200px] bg-[#203554] mt-[30px] mr-[20px] text-white py-[30px] px-[50px] min-h-[500px]">

                <section className="transaction-history" id="transaction-history">

                    <div className="mb-[40x]">
                        <h2 className="text-3xl">Transaction history</h2>
                    </div>

                    <div className="w-[75%] flex items-center mt-[20px] justify-between space-x-4 font-medium">
                        <Dropdown options={daysOptions} label="Days" />
                        <Dropdown options={transactionTypeOptions} label="Transaction Type" />
                        <Dropdown options={statusesOptions} label="Statuses" />
                        <Dropdown options={accountsViewOptions} label="All Accounts View" />
                    </div>

                    <div className="flex items-center mt-8">
                        <table className="table-auto">
                            <thead>
                                <tr className="">
                                    {[
                                        'Transaction Number',
                                        'Internal Hash Number',
                                        'Pair',
                                        'Open Time',
                                        'Close Time',
                                        'Bet Direction',
                                        'Open Price',
                                        'Close Price',
                                        'Difference',
                                        'Win / Loss',
                                        'Bet Amount',
                                        'Payout',
                                        'Account Ref Number'
                                    ].map((header, index) => (
                                        <th key={index} className="border p-4 ">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 5 }).map((_, rowIndex) => (
                                    <tr key={rowIndex} className="">
                                        {Array.from({ length: 13 }).map((_, colIndex) => (
                                            <td key={colIndex} className="border p-4 ">
                                                {/* Add your data here */}

                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </section>

            </div>

        </>
    )
}
