// import Image from 'next/image'
// import React from 'react'
// export default function DetailedCarousel({image}:{image:string[]}) {
//   return (
//     <div>
//         <div id="default-carousel" className="relative w-full" data-carousel="slide">
//             {/* <!-- Carousel wrapper --> */}
//             <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 {/* <!-- Item 1 --> */}
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <Image priority src={image[0]} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  width={500} height={300} alt="..."/>
//                 </div>
//                 {/* <!-- Item 2 --> */}
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <Image priority src={image[1]} width={500} height={300} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                 </div>
//                 {/* <!-- Item 3 --> */}
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <Image priority src={image[2]} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." width={500} height={300}/>
//                 </div> 
//             </div>









//             {/* <!-- Slider indicators --> */}
//             <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//             </div>
//             {/* <!-- Slider controls --> */}
//             <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" stroke-Linecap="round" stroke-Linejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
//                     </svg>
//                     <span className="sr-only">Previous</span>
//                 </span>
//             </button>
//             <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" stroke-Linecap="round" stroke-Linejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
//                     </svg>
//                     <span className="sr-only">Next</span>
//                 </span>
//             </button>
//         </div>
//     </div>
//   )
// }

"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import { productProp } from "@/Types/types";

export default function CardCarousel({productData}:{productData?:productProp | null}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Card className="w-full max-w-xl bg-zinc-900 text-zinc-100">
      <CardContent className="p-0">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {productData?.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[4/3]">
                  <Image
                   fill
                    alt={image}
                    className="object-cover w-full h-full rounded-t-lg"
                    src={image || "/imgPlaceholder.jpg"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 text-slate-900" />
          <CarouselNext className="right-2 text-slate-900" />
        </Carousel>
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4 pb-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index + 1 === current ? "bg-blue-600 w-6" : "bg-zinc-600"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
      <div className="p-6">
        <CardHeader className="p-0 mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{productData?.title}</h2>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <span>{productData?.price}</span>
            </div>
          </div>
        </CardHeader>
        <div className="space-y-4">
          <p className="text-zinc-400">
            {productData?.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">{productData?.quantity}</span>
              {/* <span className="text-zinc-400">/ night</span> */}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Add To Cart</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}