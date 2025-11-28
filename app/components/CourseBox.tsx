import React from 'react';
import { HiUser } from "react-icons/hi2";
import Link from 'next/link';

export interface ProductItemProps {
    id: number;
    title: string;
    category: string;
    desc: string;
    price: number;
    img: string;
}

interface CourseBoxProps {
    allCourses: ProductItemProps[];
}

export default function CourseBox({ allCourses = [] }: CourseBoxProps) {

    return (
        <>
            <div className='container flex items-center justify-center' dir='rtl'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {allCourses.map((CoursesData) => {
                        return (
                            <div key={CoursesData.id} className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 group">
                                <Link href="/DeFi-training-course">
                                    <img className="w-full h-53 p-2 rounded-2xl transition-all duration-300 filter grayscale-0 group-hover:grayscale" src={CoursesData.img} alt={CoursesData.title} />
                                </Link>
                                <div className="px-4 mb-3">
                                    <Link href='/DeFi-training-course'>
                                        <h5 className="text-base text-center Dana-Bold py-3 text-zinc-700 dark:text-white">{CoursesData.title}</h5>
                                    </Link>
                                    <div className='text-sm text-gray-700 dark:text-gray-400 text-justify line-clamp-2 mb-8'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                    <div className="flex justify-between items-center mt-2.5 mb-5">
                                        <div className="flex items-center gap-1 bg-teal-100 text-teal-800 text-base px-2.5 py-0.5 rounded-sm dark:bg-teal-200 dark:text-teal-800">
                                            <span><HiUser /></span>
                                            <span className='text-sm text-nowrap'>مدرس : {CoursesData.desc}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>

                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl text-gray-800 dark:text-white">{CoursesData.price.toLocaleString("fa-IR")}
                                            <span className='ms-1'>تومان</span>
                                        </span>
                                        <Link href="/DeFi-training-course" className="text-white text-base text-nowrap transition-colors duration-300 bg-orange-400 hover:bg-orange-500 focus:outline-none font-medium rounded-lg px-3 py-2 text-center shadow">مشاهده و خرید</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
