import React from 'react'
import SectionHeader from '@/app/components/SectionHeader'
import TeacherBox from '@/app/components/TeacherBox'
import { FaUsers } from "react-icons/fa6";
import teacherPhoto1 from '@/app/Images/teacher-1.png'
import teacherPhoto2 from '@/app/Images/teacher-2.png'
import teacherPhoto3 from '@/app/Images/teacher-3.png'
import teacherPhoto4 from '@/app/Images/teacher-4.png'
import teacherPhoto5 from '@/app/Images/teacher-5.png'

export default function CourseTeacher() {
    return (
        <>
            <div className='px-4'>
                <SectionHeader
                    title='اساتید دوره ها'
                    icons={<FaUsers />}
                />
                <div className='container flex items-center justify-center' >
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        <TeacherBox
                            teacherPhoto={teacherPhoto1}
                        />
                        <TeacherBox
                            teacherPhoto={teacherPhoto2}
                        />
                        <TeacherBox
                            teacherPhoto={teacherPhoto3}
                        />
                        <TeacherBox
                            teacherPhoto={teacherPhoto4}
                        />
                        <TeacherBox
                            teacherPhoto={teacherPhoto5}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
