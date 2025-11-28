import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


export default function SectionHeader({ title, btn, btntitle, icons }) {
    return (
        <>
            <div className='container' dir='rtl'>
                <div className='flex justify-between my-10'>
                    <div className='flex items-center gap-1.5'>
                        <span className='text-2xl text-orange-400'>{icons}</span>
                        <span className='text-2xl text-zinc-700 dark:text-gray-100 Kalameh-Medium'>{title}</span>
                    </div>
                    {
                        btn ? (
                            <div className='flex items-center gap-1'>
                                <span className='text-base cursor-pointer hover:text-orange-400 transition-colors duration-300 text-zinc-700 dark:text-gray-100'>{btntitle}</span>
                                <span className='text-base text-orange-400'><FaRegArrowAltCircleLeft /></span>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </>
    )
}
