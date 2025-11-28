'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { GrCirclePlay } from "react-icons/gr";
import { MdDescription } from "react-icons/md";
import { HiAcademicCap, HiChatBubbleLeftRight, HiDocumentText, HiArrowUturnLeft } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import studentPhoto from '@/app/Images/student-icon.png';
import supportPhoto from '@/app/Images/support-phone.jpeg';
import CourseModal from '@/app/components/CourseModal';

export default function DescriptionCourseBox({ courseTitle, teacherPhoto, teacherName, coursePhoto }) {

    const [activeTab, setActiveTab] = useState('profile');
    const [openAccordion, setOpenAccordion] = useState({
        1: true,
        2: false,
        3: false,
    });

    const toggleAccordion = (id) => {
        setOpenAccordion((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <>
            <div className='w-full bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 h-auto rounded-lg shadow p-3 mt-8'>
                {/* Teacher Info */}
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-3 mb-4 pr-2">
                        <Image className="size-10 rounded-full" width={40} height={40} src={teacherPhoto} alt="teacherPhoto" />
                        <div>
                            <div className='text-base Dana-Bold text-zinc-700 dark:text-gray-200'>
                                <span className='text-orange-400'>مدرس دوره : </span>
                                <span>{teacherName}</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-500">کارشناس ارشد بازارهای مالی</span>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="text-white cursor-pointer text-nowrap transition-colors duration-300 bg-orange-400 hover:bg-orange-500 font-medium rounded-lg text-base px-2 py-2 me-2 mb-2 shadow focus:outline-none">
                            پروفایل مدرس
                        </button>
                    </div>
                </div>
                <div className='text-justify text-base leading-8 text-zinc-700 dark:text-gray-200 p-2'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                </div>
            </div>

            {/* Tabs */}
            <div className='w-full gap-4 my-3 mb-8'>
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                    <li className="me-2" role="presentation">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`inline-block cursor-pointer p-4 border-b-2 rounded-t-lg transition-all duration-300 hover:border-orange-400 group ${activeTab === 'profile' ? 'border-orange-400' : ''}`}
                            role="tab"
                        >
                            <div className='flex items-center gap-1'>
                                <MdDescription className="text-orange-400 text-xl" />
                                <span className='text-zinc-700 dark:text-gray-200 group-hover:text-orange-400 transition-all duration-300'>توضیحات دوره</span>
                            </div>
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={`inline-block cursor-pointer p-4 border-b-2 rounded-t-lg transition-all duration-300 hover:border-orange-400 group ${activeTab === 'dashboard' ? 'border-orange-400' : ''}`}
                            role="tab"
                        >
                            <div className='flex items-center gap-1'>
                                <HiAcademicCap className="text-orange-400 text-xl" />
                                <span className="text-zinc-700 dark:text-gray-200 group-hover:text-orange-400 transition-all duration-300">جلسات دوره</span>
                            </div>
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            onClick={() => setActiveTab('settings')}
                            className={`inline-block cursor-pointer p-4 border-b-2 rounded-t-lg transition-all duration-300 hover:border-orange-400 group ${activeTab === 'settings' ? 'border-orange-400' : ''}`}
                            role="tab"
                        >
                            <div className='flex items-center gap-1'>
                                <HiChatBubbleLeftRight className="text-orange-400 text-xl" />
                                <span className="text-zinc-700 dark:text-gray-200 group-hover:text-orange-400 transition-all duration-300">نظرات دانشجویان</span>
                            </div>
                        </button>
                    </li>
                    <li className='me-2' role="presentation">
                        <button
                            onClick={() => setActiveTab('contacts')}
                            className={`iinline-block cursor-pointer p-4 border-b-2 rounded-t-lg transition-all duration-300 hover:border-orange-400 group ${activeTab === 'contacts' ? 'border-orange-400' : ''}`}
                            role="tab"
                        >
                            <div className='flex items-center gap-1'>
                                <BiSupport className="text-orange-400 text-xl" />
                                <span className="text-zinc-700 dark:text-gray-200 group-hover:text-orange-400 transition-all duration-300">پشتیبانی دوره</span>
                            </div>
                        </button>
                    </li>
                </ul>

                <div className="mt-4">
                    {activeTab === 'profile' && (
                        <div className="p-4 rounded-lg shadow-lg text-zinc-700 dark:text-gray-200 bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800">
                            <div className='flex items-center gap-1.5'>
                                <HiDocumentText className='text-2xl text-orange-400' />
                                <p className='text-xl Dana-Bold'>عنوان دوره : {courseTitle}</p>
                            </div>
                            <div className='mt-4 text-justify leading-8'>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            </div>
                            <div className='flex justify-center w-full h-auto my-6'>
                                <Image src={coursePhoto} className='rounded-lg' alt="coursePhoto" />
                            </div>
                            <div className='text-justify leading-8'>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'dashboard' && (
                        <div className="p-4 rounded-lg shadow-lg bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800">
                            {[1, 2, 3].map((id) => (
                                <div key={id} className='mb-4'>
                                    <h2>
                                        <button
                                            onClick={() => toggleAccordion(id)}
                                            className="flex items-center justify-between w-full p-5 font-medium text-gray-700 border border-gray-200 dark:text-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer"
                                        >
                                            <span className="flex items-center"><span className='text-base text-orange-400 Dana-Bold me-1'>فصل {id} :</span> عنوان فصل</span>
                                            <svg className={`w-3 h-3 shrink-0 transition-transform ${openAccordion[id] ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    {openAccordion[id] && (
                                        <div className="flex justify-between p-5 border border-t-0 rounded-b-lg dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                                            <CourseModal linkTitleCourse="ویدیوی معرفی دوره" />
                                            <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                <p className='text-lg'>13:9</p>
                                                <GrCirclePlay className='text-2xl text-orange-400' />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="p-5 rounded-lg shadow-lg bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800">
                            <article>
                                <div className='flex justify-between'>
                                    <div className="flex items-center mb-4">
                                        <Image className="w-10 h-10 me-4 rounded-full" src={studentPhoto} alt="studentPhoto" />
                                        <p className='text-base Dana-Bold text-zinc-700 dark:text-gray-200'>مجید اسکندری <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">دانشجو دوره</time></p>
                                    </div>
                                    <button type="button" className="text-orange-400 hover:text-white border rounded-lg text-base px-3 py-0 text-center mb-5 dark:border-orange-400 hover:border-orange-500 dark:hover:text-white hover:bg-orange-500 transition-color duration-300 cursor-pointer">
                                        <div className='flex items-center gap-1'>
                                            <span>پاسخ</span>
                                            <HiArrowUturnLeft className='text-lg' />
                                        </div>
                                    </button>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
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
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>تاریخ ارسال : <time dateTime="2017-03-03 19:00">اسفند 1403</time></p></footer>
                                <p className='text-justify text-base leading-8 text-zinc-700 dark:text-gray-200'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                            </article>
                        </div>
                    )}

                    {activeTab === 'contacts' && (
                        <div className="p-4 rounded-lg shadow-lg bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800">
                            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-4'>
                                <div className='leading-8'>
                                    <p className='text-base Dana-Bold text-zinc-700 dark:text-gray-100'>ارسال تیکت</p>
                                    <p className='text-zinc-500 dark:text-gray-400 text-justify'>از این طریق در سامانه تنها راه پشتیبانی رسمی برای دانشجویان می باشد. کلیه سوالات و مشکلات دانشجویان از طریق تیکت ارسالی آن ها، قابل بررسی خواهد بود.</p>
                                    <p className='text-base Dana-Bold text-zinc-700 dark:text-gray-100 pt-4'>زمان پاسخگویی پشتیبانی</p>
                                    <p className='text-zinc-500 dark:text-gray-400 text-justify'>شما دانشجویان عزیز می توانید در هر زمان سوالات خود را به صورت تیکت برای دپارتمان مربوطه ارسال کنید. تیم پشتیبانی فنی طی مدت 1 الی 24 ساعت کاری، تیکت شما را پاسخ خواهند داد.</p>
                                    <p className='text-base Dana-Bold text-zinc-700 dark:text-gray-100 pt-4'>پاسخگویی از طریق واتس اپ</p>
                                    <p className='text-zinc-500 dark:text-gray-400 text-justify'>شما دانشجویان عزیز میتوانید از طریق واتس اپ مجموعه بصورت 24 ساعته پیغام خود را ارسال کنید تا پشتیبان دوره مربوطه در اسرع وقت به شما پاسخ خواهند داد.</p>
                                </div>
                                <div className='flex items-center'>
                                    <Image src={supportPhoto} className='w-full h-full xl:w-280 xl:h-auto rounded-lg' alt="supportPhoto" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
