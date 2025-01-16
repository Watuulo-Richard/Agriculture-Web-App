import React from 'react'
import { FaHome } from "react-icons/fa";
import { SiFresh } from "react-icons/si";
import { MdDeliveryDining } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function NavigationBarBottomDetails() {
  return (
    <div>
<nav className='bg-white fixed bottom-0 w-full flex justify-between p-2'>
            <a href="#">
                <div className="text-textColor flex flex-col items-center">
                    <div className="text-3xl">
                        <FaHome />
                    </div>
                    <p className='text-sm'>Home</p>
                </div>
            </a>
            <a href="#">
                <div className="text-textColor flex flex-col items-center">
                    <div className="text-3xl">
                        <SiFresh />
                    </div>
                    <p className='text-sm'>Fresh</p>
                </div>
            </a>
            <a href="#">
                <div className="text-textColor">
                    <div className="text-3xl flex flex-col items-center">
                        <MdDeliveryDining />
                    </div>
                    <p className='text-sm'>Rental</p>
                </div>
            </a>
            <a href="#">
                <div className="text-textColor">
                    <div className="text-3xl flex flex-col items-center">
                        <CgProfile />
                    </div>
                    <p className='text-sm'>Profile</p>
                </div>
            </a>
        </nav>
    </div>
  )
}
