'use client';
import React, { useState } from 'react';
import { SiConcourse } from "react-icons/si";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import Navbar from '@/app/components/Navbar';
import DescriptionCourseBox from '@/app/components/DescriptionCourseBox';
import Footer from '@/app/components/Footer';
import TeacherPhoto from '@/app/Images/teacher-2.png';
import coursePhoto from '@/app/Images/course-photo-4.jpeg';

export default function BitcoinTrainingCourse() {
    const products = [
        {
            id: 1,
            title: 'آموزش بیت کوین',
            price: 4000000,
            image: coursePhoto,
        },
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex === -1) {
            setCart([...cart, { ...product, quantity: 1 }]);
        } else {
            const newCart = [...cart];
            newCart[existingProductIndex].quantity += 1;
            setCart(newCart);
        }
    };

    return (
        <>
            <Navbar cart={cart} setCart={setCart} />
            <div className='bg-gray-100 dark:bg-zinc-700'>
                <div className='container px-4' dir='rtl'>
                    {products.map((product) => (
                        <div key={product.id} className='flex flex-col lg:flex-row justify-between gap-3 pt-28'>
                            <div className='w-full'>
                                <video
                                    className="w-full h-87 max-w-full rounded-lg shadow object-cover"
                                    poster={product.image}
                                    alt={product.title}
                                    controls
                                >
                                    <source src="/videos/learning-video.mp4" type="video/mp4" />
                                    لطفا مرورگر خود را رفرش کنید.
                                </video>
                            </div>
                            <div className='w-full bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 rounded-lg p-3.5 shadow'>
                                <div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base mb-2 text-zinc-700 dark:text-gray-200">درصد تکمیل دوره</span>
                                            <span className="text-base text-orange-400">95%</span>
                                        </div>
                                        <div className="w-full mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '95%' }} />
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center gap-2'>
                                        <button
                                            type="button"
                                            onClick={() => addToCart(product)}
                                            className="text-white text-nowrap text-base w-1/2 bg-orange-400 hover:bg-orange-500 transition-colors duration-300 focus:outline-none font-medium rounded-md px-5 py-2 text-center cursor-pointer"
                                        >
                                            افزودن به سبد خرید
                                        </button>
                                        <div className='flex justify-center items-center text-gray-900 bg-gray-300 dark:bg-gray-400 rounded-md w-1/2 p-2 gap-1'>
                                            <p className='text-gray-700 dark:text-gray-800'>{product.price.toLocaleString("fa-IR")} تومان</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center my-3 bg-gray-200 dark:bg-gray-600 w-full rounded p-2'>
                                        <div className='flex items-center gap-1'>
                                            <SiConcourse className='text-orange-400' />
                                            <p className='text-gray-700 dark:text-gray-200'>عنوان دوره :</p>
                                        </div>
                                        <span className='text-gray-700 dark:text-gray-200'>{product.title}</span>
                                    </div>
                                    <div className='flex justify-between items-center my-3 bg-gray-200 dark:bg-gray-600 w-full rounded gap-1 p-2'>
                                        <div className='flex items-center gap-1'>
                                            <PiStudentDuotone className='text-orange-400' />
                                            <p className='text-gray-700 dark:text-gray-200'>تعداد دانشجویان دوره :</p>
                                        </div>
                                        <div className='text-gray-700 dark:text-gray-200'>530</div>
                                    </div>
                                    <div className='flex justify-between items-center my-3 bg-gray-200 dark:bg-gray-600 w-full rounded gap-1 p-2'>
                                        <div className='flex items-center gap-1'>
                                            <MdOutlineAccessTime className='text-orange-400' />
                                            <p className='text-gray-700 dark:text-gray-200'>مدت زمان دوره :</p>
                                        </div>
                                        <span className='text-gray-700 dark:text-gray-200'>5 ساعت و 25 دقیقه</span>
                                    </div>
                                    <div className='flex justify-between items-center my-3 mb-0 bg-gray-200 dark:bg-gray-600 w-full rounded gap-1 p-2'>
                                        <div className='flex items-center gap-1'>
                                            <RxUpdate className='text-orange-400' />
                                            <p className='text-gray-700 dark:text-gray-200'>تاریخ انتشار دوره :</p>
                                        </div>
                                        <span className='text-gray-700 dark:text-gray-200'>1403/11/12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <DescriptionCourseBox
                        courseTitle='آموزش معاملات بیت کوین'
                        coursePhoto={coursePhoto}
                        teacherPhoto={TeacherPhoto}
                        teacherName='امیر کاشانی'
                    />
                </div>
                <Footer />
            </div>
        </>
    );
}

