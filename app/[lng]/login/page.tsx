import React from 'react'
import { GoogleIcon } from '../assets/images'
import Image from 'next/image';

export const runtime = 'edge';

// Create an array of possible phrases
const phrases = [
  'Dive into EUR/USD right now and soar!',
  'Get ahead with BTC/USD in the next seconds and be a winner!',
  'Maximize profits with GBP/JPY before the day ends and reach for the stars!',
  'Seize the moment with AUD/NZD while the market is hot and achieve unprecedented gains!',
  'Unlock opportunities with USD/CAD in this golden minute and be a market leader!',
  'Embark on a journey with ETH/USD in the next trading session and step into the limelight!',
  'Experience the thrill with BCH/USD before the next big surge and ride the wave of success!',
  'Capitalize on LTC/USD while opportunities abound and witness the surge!',
  'Ignite your portfolio with XRP/USD as the market unfolds for a prosperous future!',
  'Revolutionize your trades with ADA/USD and be a part of the revolution!',
  'Dive into DOT/USD right now and soar!',
  'Get ahead with LINK/USD in the next seconds and be a winner!',
  'Maximize profits with BNB/USD before the day ends and reach for the stars!',
  // Add more phrases here...
];


function generateRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

export default function Login() {
  const randomPhrase = generateRandomPhrase();

  return (
    <>
      <div className="flex relative h-screen">
        <div
          className="w-9/12 absolute inset-0 bg-center bg-no-repeat bg-cover filter blur-sm"
          style={{
            backgroundImage: "url('https://mg.co.za/wp-content/uploads/2023/01/f53b607f-forex.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="w-9/12 relative">
          <div className="flex items-center pl-7 h-screen">
            <p className="text-xl text-white text-center z-10 font-bold">{randomPhrase}</p>
          </div>
        </div>

        <div className="w-3/12">
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl mb-3 font-bold text-white">
              <span className="text-blue-500">WAHOO</span>PREDICT
            </h1>
            <p className="text-lg text-white">Get started</p>
            <a
              href="#"
              className="border rounded-2xl border-white text-white px-8 py-3 mt-4 flex items-center bg-custom-button transition-colors hover:bg-blue-700"
            >
              <Image className="w-8 pr-2" src={GoogleIcon} alt="Google Logo" />
              Sign In with Google
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

