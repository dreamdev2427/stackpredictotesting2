"use client";

import React, { useState } from 'react';
import Dropdown from './components/Dropdown';

export const runtime = 'edge';

export default function TickHistory() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const instrument = [{ value: 'XAUUSDM', label: 'XAUUSDM' }];

    // Get the current year and month
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 since months are zero-indexed

    // Calculate the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

    // Generate an array of years
    const yearsOptions = [];
    for (let year = currentYear; year >= currentYear - 10; year--) {
        yearsOptions.push({ value: year.toString(), label: year.toString() });
    }

    // Generate an array of months
    const monthsOptions = [];
    for (let month = 1; month <= 12; month++) {
        monthsOptions.push({ value: month.toString(), label: month.toString() });
    }

    // Generate an array of days for the current month
    const daysOptions = [];
    for (let day = 1; day <= daysInMonth; day++) {
        daysOptions.push({ value: day.toString(), label: day.toString() });
    }


    return (
        <div className='items-center text-white ml-10 mt-12'>
            <div className='w-[50%]'>
                <h3 className='text-5xl mb-4'>Tick history</h3>
                <p className=''>
                    Access an archive of historical tick data drawn from our real-time pricing vendor. Select an instrument and time period to download a CSV file of midpoint prices by instrument for the day of your trade when you placed your bet.
                </p>
            </div>
            <div className='flex w-full justify-center mt-10'>
                <div className='w-[25%] '>
                    <div className='my-4'>
                        <p className='mb-2'>Instrument</p>
                        <Dropdown options={instrument} label="Instrument" />
                    </div>


                    <div className='my-4'>
                        <p className='mb-2'>Year</p>
                        <Dropdown options={yearsOptions} label="Year" />
                    </div>

                    <div className='my-4'>
                        <p className='mb-2'>Month</p>
                        <Dropdown options={monthsOptions} label="Month" />
                    </div>

                    <div className='my-4'>
                        <p className='mb-2'>Day</p>
                        <Dropdown options={daysOptions} label="Day" />
                    </div>

                    <div className='flex justify-center w-full my-12'>
                        <button className='text-white bg-blue-500 rounded py-2 px-8 hover:bg-white hover:text-blue-500'>
                            Get ticks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
