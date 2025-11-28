"use client"
import React, { useState } from "react";
import data from "./TemplateData.json";
import Breadcrumb from '@/app/components/Breadcrumb';
import Footer from '@/app/components/Footer';
import CategoryHeader from '@/app/components/CategoryHeader';
import Pagination from '@/app/components/Pagination';
import SectionHeader from '@/app/components/SectionHeader'
import { RiAlarmWarningLine } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import NavbarHome from "@/app/components/NavbarHome";
import Link from "next/link";
import _ from 'lodash';

export default function CryptoEducation() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <NavbarHome />
            <div className="bg-gray-100 dark:bg-zinc-700">
                <CategoryHeader />
                <div className="px-4">
                    <Breadcrumb
                        firstTitleHref='/crypto-education'
                        firstTitle='دسته بندی دوره ها'
                        secondTitle='همه دوره های آموزشی'
                    />
                    <SectionHeader
                        title='همه دوره های آموزشی'
                        icons={<HiAcademicCap />}

                    />
                    <div className='container shadow overflow-hidden rounded-xl bg-gray-200 border border-gray-200 dark:bg-zinc-600 dark:border-zinc-600'>
                        <form className="max-w mx-auto px-3 py-3" dir='rtl'>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 shadow text-sm text-gray-900 outline-none rounded-lg bg-gray-100 dark:bg-zinc-800 dark:placeholder-gray-400 dark:text-white" placeholder="چیو میخوای یاد بگیری؟" onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                }} required />
                                <button type="submit" className="text-white cursor-pointer absolute end-2.5 bottom-2 bg-orange-400 hover:bg-orange-500 focus:outline-none font-base shadow rounded-lg text-sm px-4 py-2 dark:bg-orange-400 dark:hover:bg-orange-500">بزن بریم !</button>
                            </div>
                        </form>
                        <div className='container flex items-center justify-center px-3'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-3'>
                                {
                                    _.filter(data, (val) => {
                                        if (searchTerm === "") {
                                            return true;  // اگر چیزی جستجو نشده بود همه رو نمایش بده
                                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return true;  // فقط مواردی که شامل جستجو باشه رو نشون بده
                                        }
                                        return false;
                                    }).length > 0 ?
                                        _.filter(data, (val) => {
                                            if (searchTerm === "") {
                                                return true;
                                            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return true;
                                            }
                                            return false;
                                        }).map((val) => {
                                            return (
                                                <div className="w-full max-w-sm mb-0 bg-white border border-gray-200 shadow-sm dark:bg-zinc-800 dark:border-gray-800 rounded-xl group" key={val.id} dir="rtl">
                                                    <Link href="/DeFi-training-course">
                                                        <img className="w-full p-2 h-53 rounded-2xl transition-all duration-300 filter grayscale-0 group-hover:grayscale" src={val.image} alt="product image" />
                                                    </Link>
                                                    <div className="px-4 pb-3">
                                                        <Link href="/DeFi-training-course">
                                                            <h5 className="text-base text-center Dana-Bold py-3 text-zinc-700 dark:text-white">{val.title}</h5>
                                                        </Link>
                                                        <div className='text-sm text-gray-700 dark:text-gray-400 text-justify line-clamp-2 mb-8'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                                        <div className="flex justify-between items-center mt-2.5 mb-5">
                                                            <div className="flex items-center gap-1 bg-teal-100 text-teal-800 text-base px-2.5 py-0.5 rounded-sm dark:bg-teal-200 dark:text-teal-800">
                                                                <span><HiUser /></span>
                                                                <span className='text-sm text-nowrap'>مدرس : {val.desc}</span>
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
                                                            <span className="text-xl text-gray-800 dark:text-white">{val.price.toLocaleString("fa-IR")}
                                                                <span className='ms-1'>تومان</span>
                                                            </span>
                                                            <Link href="/DeFi-training-course" className="text-white text-base text-nowrap transition-colors duration-300 bg-orange-400 hover:bg-orange-500 focus:outline-none font-medium rounded-lg px-3 py-2 text-center shadow">مشاهده و خرید</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        <>
                                            <div className="col-start-1 col-end-5">
                                                <div className="flex justify-center items-center p-4 gap-1 text-sm text-orange-400 rounded-lg bg-yellow-50 dark:bg-zinc-800" role="alert">
                                                    <span className="sr-only">Info</span>
                                                    <div className="text-center text-nowrap">
                                                        <span className="text-base">دوره مورد نظر یافت نشد. دوباره تلاش کنید</span>
                                                    </div>
                                                    <div className="text-xl">
                                                        <RiAlarmWarningLine />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
            <Footer />
        </>
    )
}
