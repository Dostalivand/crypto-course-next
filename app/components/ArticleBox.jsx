import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';

export default function ArticleBox({ title, articlePhoto }) {
    return (
        <>
            <Link href="/#home" className="m-1 mb-13 flex flex-col items-center transition-all duration-300 ease-linear shadow-lg bg-white rounded-lg md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-zinc-800 dark:hover:bg-gray-700" dir='rtl'>
                <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto lg:h-auto xl:h-auto md:w-48 md:rounded-none md:rounded-s-lg transition-all duration-300 filter grayscale-0 hover:grayscale" src={articlePhoto} alt='articlePhoto' />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 text-xl Dana-Bold text-zinc-700 dark:text-white">{title}</p>
                    <p className="mb-3 text-sm line-clamp-5 text-justify text-gray-700 dark:text-gray-400">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                    <div className='flex items-center border-t text-orange-400 gap-0.5'>
                        <p className='pt-4 text-base'>ادامه مقاله</p>
                        <span className='pt-4'><IoIosArrowDropleft /></span>
                    </div>
                </div>
            </Link>
        </>
    )
}
