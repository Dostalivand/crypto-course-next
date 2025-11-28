"use client"
import React, { useState } from "react";


export default function CourseModal({ linkTitleCourse }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const products = [
        {
            id: 1,
            title: 'آموزش آلت کوین ها',
            price: 2500000,
            image: '../../images/course-photo-7.jpeg',
        },
    ];

    const openModal = () => {
        setIsVisible(true);
        setTimeout(() => setIsOpen(true), 10); // کمی تأخیر برای اعمال کلاس‌های CSS
    };

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => setIsVisible(false), 300); // زمان مطابق duration در transition
    };

    return (
        <>
            {/* Modal toggle */}
            <div className='flex gap-2 items-center cursor-pointer text-zinc-700 dark:text-gray-200 transition-all duration-300 hover:text-orange-400 group' onClick={openModal}>
                <p className='flex items-center justify-center bg-gray-200 dark:bg-gray-600 transition-all duration-300 group-hover:bg-orange-400 group-hover:text-white w-7 h-7 rounded'>1</p>
                <p>{linkTitleCourse}</p>
            </div>
            {isVisible && (
                <div className={`fixed inset-0 z-150 mt-6 px-4 flex justify-center items-center w-full h-full transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeModal}>
                    <div
                        className={`bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-800 max-w-2xl w-full p-5 transform transition-transform duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن هنگام کلیک روی مدال
                    >
                        {/* Modal header */}
                        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-white/10 pb-3">
                            <h3 className="text-xl text-zinc-700 dark:text-gray-200">
                                {linkTitleCourse}
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-orange-400 cursor-pointer transition-all duration-300 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        {/* Modal body */}
                        {products.map((product) => (
                            <div key={product.id} className='w-full mt-4'>
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
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
