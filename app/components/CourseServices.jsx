import React from 'react'
import SectionHeader from '@/app/components/SectionHeader'
import ServicesBox from '@/app/components/ServicesBox'
import { GrServices } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { GrPhone } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import telegram from '@/app/Images/telegram-app.jpeg'
import phone from '@/app/Images/phone.jpeg'
import support from '@/app/Images/support.jpeg'
import onlineGroup from '@/app/Images/online-group.jpeg'

export default function CourseServices() {
    return (
        <>
            <div className='px-4'>
                <SectionHeader
                    title='خدمات دوره ها'
                    icons={<GrServices />}
                />
                <div className='container flex items-center justify-center' dir='rtl'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
                        <ServicesBox
                            bgColor='bg-blue-500/70'
                            image={telegram}
                            icon={<SiTelegram />}
                            title='پشتیبانی گروه تلگرامی'
                            description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.' />
                        <ServicesBox
                            bgColor='bg-lime-500/70'
                            image={support}
                            icon={<BiSupport />}
                            title='ارسال تیکت به پشتیبانی'
                            description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.' />
                        <ServicesBox
                            bgColor='bg-fuchsia-500/70'
                            image={phone}
                            icon={<GrPhone className='text-2xl' />}
                            title='تماس تلفنی با پشتیبان'
                            description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.' />
                        <ServicesBox
                            bgColor='bg-orange-500/70'
                            image={onlineGroup}
                            icon={<FaPeopleGroup />}
                            title='دورهمی آنلاین با مدرس'
                            description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.' />
                    </div>
                </div>
            </div>
        </>
    )
}
