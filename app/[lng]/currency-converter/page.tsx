"use client";

import React, { useState } from 'react';

export const runtime = 'edge';

export default function CurrencyConverter() {

    const currencies = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD'];
    const [selectedCurrency, setSelectedCurrency] = useState<string>('');

    const handleCurrencySelect = (currency: string) => {
        setSelectedCurrency(currency);
    };

    return (
        <div className='items-center text-white ml-10 mt-12'>
            <div className='w-[40%]'>
                <h3 className='text-5xl mb-4'>Currency converter</h3>
                <p className=''>
                    Need a quick currency conversion? Simply enter the details into our easy currency converter. You&rsquo;ll always get the latest rates as our converter is updated in real-time.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-20">
                {currencies.map((currency) => (
                    <div key={currency} className="flex items-center space-x-2 w-full">
                        <div className="w-8/12">
                            <input
                                type="number"
                                className="w-full border p-2 rounded bg-transparent"
                                placeholder={`Amount in ${currency}`}
                            />
                        </div>
                        <div className="w-2/12 relative">

                            <select className="w-full p-2 border rounded bg-transparent">
                                {currencies.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
