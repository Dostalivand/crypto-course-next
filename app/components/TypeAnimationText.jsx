"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function TypeAnimationText() {
    return (
        <TypeAnimation
            sequence={[
                'بازارهای مالی جهانی',
                1500,
                'معاملات بازار فارکس',
                1500,
                'شناخت و تحلیل بازار کریپتو',
                1500
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
            className='mt-5 Dana-Regular text-orange-400 dark:text-orange-300'
        />
    )
}
