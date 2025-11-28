"use client"
import React from 'react';


export default function CategoryHeader() {
    return (
        <div className="relative mb-6 h-130">
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-85" autoPlay loop muted>
                <source src="/videos/learning-video.mp4" type="video/mp4" />
            </video>
            <div className="relative px-4 mx-auto max-w-7xl text-center pt-58">
                <div className="mb-4 text-4xl Kalameh-Medium leading-none text-white md:text-5xl lg:text-6xl">
                    <span className='text-gray-100'>دوره های آموزشی <span className='text-orange-300'>ارزهای دیجیتال</span></span>
                </div>
                <p className="mb-8 text-sm sm:text-sm md:text-base lg:text-xl text-gray-100 sm:px-16 lg:px-48">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
            </div>
        </div>
    );
}