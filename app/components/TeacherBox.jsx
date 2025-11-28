import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import Image from 'next/image';

export default function TeacherBox({ teacherPhoto }) {
    return (
        <>
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 mt-12">
                <div className="flex flex-col items-center p-10 pt-7 group">
                    <Image className="size-40 rounded-full shadow-lg transform -translate-y-20 group-hover:rotate-9 duration-600" src={teacherPhoto} alt="Bonnie image" />
                    <div className='-mt-15'>
                        <h5 className="flex justify-center mb-2 text-2xl Dana-Bold text-zinc-700 dark:text-white">لورم ایپسوم</h5>
                        <p className="flex justify-center text-md text-gray-700 dark:text-gray-400">تحلیلگر بازارهای مالی</p>
                        <div className="flex text-xl cursor-pointer text-nowrap text-orange-400 m-4 -mb-3 gap-4">
                            <FaLinkedinIn />
                            <RiInstagramFill />
                            <IoLogoTwitter />
                            <FaTelegram />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
