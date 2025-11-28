"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <li className="relative" ref={dropdownRef}>
            {/* Trigger */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full py-2 px-3 cursor-pointer text-zinc-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 transition-colors duration-300 md:p-0 md:w-auto dark:text-gray-200 dark:hover:text-orange-300 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
                دسته بندی دوره ها
                <svg
                    className={`w-2.5 h-2.5 ms-3 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                        }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {/* Dropdown menu */}
            <div
                className={`absolute right-0 mt-2 z-20 w-44 bg-white rounded-lg shadow-sm dark:bg-gray-700 transition-all duration-200 overflow-hidden ${open
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <Link
                            href="/bitcoin-training-course"
                            className="block px-4 py-2 hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 ease-linear"
                            onClick={() => setOpen(false)}
                        >
                            دوره آموزش بیت کوین
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/altcoin-training-course"
                            className="block px-4 py-2 hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 ease-linear"
                            onClick={() => setOpen(false)}
                        >
                            دوره آموزش آلت کوین ها
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/DeFi-training-course"
                            className="block px-4 py-2 hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 ease-linear"
                            onClick={() => setOpen(false)}
                        >
                            دوره تحلیل بازارهای مالی
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
    );
}
