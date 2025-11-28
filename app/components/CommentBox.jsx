import React from 'react'
import studentIcon from '../Images/student-icon.png'
import Link from 'next/link'
import Image from 'next/image'

export default function CommentBox() {
    return (
        <>
            <div className="max-w-md p-6 bg-white rounded-xl border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 group" dir='rtl'>
                <div className="flex items-center gap-3 mb-3">
                    <Image className="size-13 rounded-full" src={studentIcon} alt="studentIcon" />
                    <div className="dark:text-white">
                        <div>مجید سعیدنیا</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">دانشجو دوره بیت کوین</div>
                    </div>
                </div>
                <Link href="/#comment">
                    <h5 className="mb-2 text-base md:text-xl lg:text-xl xl:text-xl text-zinc-700 dark:text-white">تدریس استاد جواهری</h5>
                </Link>
                <p className="mb-3 text-sm md:text-base lg:text-base xl:text-base text-gray-500 dark:text-gray-400 line-clamp-3 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                <Link href="/#comment" className="inline-flex items-center text-orange-400 hover:text-orange-500">
                    متن کامل
                    <svg className="w-3 h-3 ms-2 rotate-270" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </Link>
            </div>
        </>
    )
}
