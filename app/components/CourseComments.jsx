// "use client"
// import React from 'react';
// import SectionHeader from '@/app/components/SectionHeader'
// import CommentBox from '@/app/components/CourseBox'
// import { HiChatBubbleLeftRight } from "react-icons/hi2";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// export default function CourseComments() {

//     return (
//         <>
//             <div className='px-4'>
//                 <SectionHeader
//                     title='نظرات دانشجو های دوره'
//                     btn='true'
//                     btntitle='مشاهده نظرات'
//                     icons={<HiChatBubbleLeftRight />}
//                 />
//                 <div className="container slider-container">
//                     <Swiper
//                         spaceBetween={15}
//                         breakpoints={{
//                             0: { slidesPerView: 1, centeredSlides: true },
//                             340: { slidesPerView: 2, centeredSlides: true },
//                             640: { slidesPerView: 2, centeredSlides: true },
//                             768: { slidesPerView: 2 },
//                             1024: { slidesPerView: 3 },
//                         }}
//                         slidesPerView={2}
//                         autoplay={{
//                             delay: 999999999,
//                             disableOnInteraction: false,
//                         }}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         navigation={{
//                             nextEl: '.swiper-button-next',
//                             prevEl: '.swiper-button-prev',
//                         }}
//                         modules={[Autoplay, Pagination, Navigation]}
//                         className="mySwiper"
//                     >
//                         <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
//                         <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
//                         <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
//                         <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
//                         <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
//                         <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
//                         <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
//                         <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>
//         </>
//     )
// }



"use client";
import React from 'react';
import SectionHeader from '@/app/components/SectionHeader';
import CommentBox from '@/app/components/CommentBox';
import { HiChatBubbleLeftRight } from "react-icons/hi2";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function CourseComments() {

    return (
        <div className="px-4">
            <SectionHeader
                title="نظرات دانشجو های دوره"
                btn="true"
                btntitle="مشاهده نظرات"
                icons={<HiChatBubbleLeftRight />}
            />

            <div className="container w-full max-w-7xl mx-auto slider-container">
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 1.5 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                >
                    {[...Array(8)].map((_, i) => (
                        <SwiperSlide key={i}>
                            <CommentBox />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
