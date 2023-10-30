import { ellipsisIcon } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

export default function ListVerticaInfo() {
  return (
    <>
          <div className="border p-[20px] mt-[40px] max-w-[330px]">
              <div className="flex justify-between items-center mb-6">
                  <h3>#561635161</h3>
                  <a href="#"><Image className="w-5" src={ellipsisIcon} alt="Icon" /></a>
              </div>

              <div className="text-gray-500  text-base">
                  <div className="flex justify-between ">
                      <p>NUMBER -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; </p>
                      <p>561635161</p>

                  </div>

                  <div className="flex justify-between">
                      <p>PLATFORM -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; </p>
                      <p>WEB</p>
                  </div>

                  <div className="flex justify-between">
                      <p>TYPE -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; </p>
                      <p>STANDARD</p>
                  </div>

                  <div className="flex justify-between">
                      <p>SERVER &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>
                      <p>BAREMETAL</p>
                  </div>

                  <div className="flex justify-between">
                      <p>FREE MARGIN -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>
                      <p>0.00 USD</p>
                  </div>

                  <div className="flex justify-between">
                      <p>ACTUAL MARGIN -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>
                      <p>0</p>
                  </div>

                  <div className="flex justify-between">
                      <p>ACTUAL LEVERAGE &#45;&#45;&#45;&#45;&#45;&#45;</p>
                      <p>1:200</p>
                  </div>

                  <div className="flex justify-between">
                      <p>MAX LEVERAGE &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; </p>
                      <p>1:200</p>
                  </div>
              </div>


          </div>
    </>
  )
}
