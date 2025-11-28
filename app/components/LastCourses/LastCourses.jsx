"use client"
import React, { useState } from 'react';
import CoursesData from '@/app/database/data'
import Categories from '@/app/components/Categories'
import CourseBox from '@/app/components/CourseBox'


const allCategories = [...new Set(CoursesData.map(CoursesData => CoursesData.category)), 'همه دوره ها']

export default function LastCourses() {

    const [allCourses, setAllCourses] = useState(CoursesData)
    const [categories, setCategories] = useState(allCategories)

    const filterMenus = (category) => {
        if (category === 'همه دوره ها') {
            setAllCourses(CoursesData)
            return
        }

        let filteredMenus = CoursesData.filter(CoursesData => CoursesData.category === category)
        setAllCourses(filteredMenus)
    }


    return (
        <>
            <div className='menu section shadow text-zinc-600 bg-gray-300 dark:bg-zinc-800'>
                <Categories categories={categories} filterMenus={filterMenus} />
            </div>
            <CourseBox allCourses={allCourses} />
        </>
    )
}
