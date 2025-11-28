import React from 'react';
import landingLogo from '@/app/Images/landing-photo.png'
import bazarApp from '@/app/Images/bazar-app.png'
import googleApp from '@/app/Images/google-play.png'
import Image from 'next/image';
import TypeAnimationText from '@/app/components/TypeAnimationText'

export default function Landing() {
    return (
        <>
            <div className='h-auto bg-gray-200 dark:bg-zinc-800 shadow'>
                {/* main */}
                <div className="container md:pt-20 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/* left */}
                    <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-center overflow-y-hidden mt-4" dir='rtl'>

                        <div className="mt-22 xl:mt-5 lg:mt-5 md:mt-5 text-2xl bg-gray-300 dark:bg-zinc-700 shadow p-4 rounded-xl backdrop-blur-3xl md:text-3xl sm:text-2xl text-gray-600 dark:text-gray-200 font-bold text-center md:text-center w-full md:max-w-none">
                            <div className='text-transparent Kalameh-Medium bg-clip-text bg-linear-to-r to-emerald-500 from-sky-400'>آموزش دوره های سازمانی و تخصصی</div>
                            <TypeAnimationText />
                        </div>
                        <div className='bg-orange-400 text-white w-full text-center shadow rounded-lg translate-y-9 p-3'>
                            <span className='text-xl'>دانلود اپلیکیشن سایت : </span>
                        </div>
                        <div className="flex w-full justify-evenly gap-2 bg-gray-300 dark:bg-zinc-700 mt-5 rounded-lg shadow lg:pb-0 fade-in">
                            <Image src={bazarApp} alt="Bazar-Store" className="h-12 w-36 rounded-lg cursor-pointer shadow mt-8 mb-4 " />
                            <Image src={googleApp} alt="Play-Store" className="h-12 w-36 rounded-lg cursor-pointer shadow mt-8 mb-4 " />
                        </div>
                    </div>
                    {/* left */}
                    <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                        <Image className="w-5/6 mx-auto" src={landingLogo} alt="photo" />
                    </div>
                </div>
            </div>
        </>
    );
}
