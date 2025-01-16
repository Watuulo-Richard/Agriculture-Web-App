"use client"
import React from 'react'
import Image from 'next/image';
import ImageTwo from '@/public/2.png'
import ImageFour from '@/public/4.png'
import ImageOne from '@/public/1.png'
import ImageThree from '@/public/3.png'
import ImageFive from '@/public/SD.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
// import 'swiper/css/scrollbar';
export default function Carousel() {
  return (
    <div className="relative">
        <Swiper
          spaceBetween={0}
          modules={[Navigation, Pagination,Autoplay]}
          slidesPerView={1}
          autoplay={true}
          loop
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
        >
          
          <SwiperSlide>
            <Image className='w-full' src={ImageOne} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <Image className='w-full' src={ImageTwo} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <Image className='w-full' src={ImageThree} alt="" />
          </SwiperSlide>

          <SwiperSlide >
            <Image className='w-full' src={ImageFour} alt="" />
          </SwiperSlide>

        </Swiper>
        <div className="absolute inset-0 bg-black/0 blur-lg w-[80%] mx-auto pointer-events-none z-10"></div>
        <div className="flex my-3">
            <Link href="/Home" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full mx-4">SKIP</Link>
        </div>
        <div className="text-center my-3">
            <h3 className='text-textColor text-3xl font-bold font-Lobster'>Farmer`&apos;s Market Platform Challenge</h3>
            <p className='text-textColor my-2 text-decoration-underline'>All Rights Reserved By Desishub Community</p>
        </div>
        <div className="">
          <Image src={ImageFive} className='w-full h-full block object-cover' alt="" />
        </div>
    </div>
  )
}
