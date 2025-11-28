import React from 'react';
import aboutPhoto from '@/app/Images/about.png'
import { LuShieldAlert } from 'react-icons/lu';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className='container pb-13 px-6 sm:px-2 md:px-3 lg:px-1' dir='rtl'>
            <div className='bg-white rounded-xl shadow-lg border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 p-5'>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-6 lg:gap-6'>
                    <div className='lg:col-span-3 order-2 lg:order-1'>
                        <div className='flex items-center gap-1'>
                            <span className='text-3xl text-orange-400'><LuShieldAlert /></span>
                            <span className='text-2xl text-zinc-700 dark:text-white Kalameh-Medium'>درباره ما</span>
                        </div>
                        <p className='text-gray-700 dark:text-gray-400 text-justify text-sm xl:text-base mt-5'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                        <p className='text-gray-700 dark:text-gray-400 text-justify text-sm xl:text-base'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                        </p>
                    </div>
                    <div className='order-1 lg:order-2 flex justify-center'>
                        <Image src={aboutPhoto} alt='aboutPhoto' className='spin w-55 h-55 lg:w-75 lg:h-55 xl:w-75 xl:h-73 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.5)]' />
                    </div>
                </div>
            </div>
        </div>
    );
}

