import React from 'react'
import NavbarHome from '@/app/components/NavbarHome'
import Landing from '@/app/components/Landing'
import LastCourses from '@/app/components/LastCourses/LastCourses'
import CourseComments from '@/app/components/CourseComments'
import CourseTeacher from '@/app/components/CourseTeacher'
import CourseServices from '@/app/components/CourseServices'
import Article from '@/app/components/Article'
import AboutUs from '@/app/components/AboutUs'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <NavbarHome />
      <div className='min-h-screen bg-gray-100 dark:bg-zinc-700'>
        <Landing />
        <LastCourses />
        <CourseComments />
        <CourseTeacher />
        <CourseServices />
        <Article />
        <AboutUs />
      </div>
      <Footer />
    </>
  )
}
