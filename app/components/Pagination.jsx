import React from 'react'

export default function Pagination() {
    return (
        <>
            <nav aria-label="Page navigation example" className='flex justify-center py-10'>
                <ul className="inline-flex -space-x-px text-base h-10">
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight transition-all duration-300 text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-800 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white shadow-md">صفحه قبل</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center transition-all duration-300 px-4 h-10 text-white border border-gray-300 bg-orange-400 hover:bg-orange-500 hover:text-white dark:border-gray-800 dark:bg-orange-400 dark:text-white shadow-md">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight transition-all duration-300 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-800 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white shadow-md">2</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight transition-all duration-300 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-800 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white shadow-md">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight transition-all duration-300 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-800 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white shadow-md">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight transition-all duration-300 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-800 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white shadow-md">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight transition-all duration-300 text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-800 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white shadow-md">صفحه بعد</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

