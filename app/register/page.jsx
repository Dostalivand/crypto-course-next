"use client"
import React from 'react'
import registerPhoto from '@/app/Images/register-photo.jpeg'
import Footer from '@/app/components/Footer'
import NavbarHome from '@/app/components/NavbarHome';
import { FaAt } from "react-icons/fa6";
import { LuKeySquare } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useFormik } from "formik";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import Link from 'next/link';


export default function Register() {

    const form = useFormik({
        initialValues: { name: "", password: "", phone: "", email: "", address: "" },

        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log("Form Inputs Data =>", values);
            setTimeout(() => {
                setSubmitting(false);
                resetForm();
            }, 50);
        },

        validate: (values) => {
            const errors = {};

            if (values.name === "") {
                errors.name = "نام کاربری خود را وارد کنید.";
            } else if (values.name.length < 4) {
                errors.name = "طول نام کاربری حداقل باید ۴ کاراکتر باشد";
            }
            if (values.phone === "") {
                errors.phone = "شماره همراه خود را وارد کنید.";
            }
            if (values.email === "") {
                errors.email = "وارد کردن ایمیل اجباری می باشد.";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "ایمیل وارد شده معتبر نیست. حتما باید شامل @ باشد.";
            }
            if (values.address === "") {
                errors.address = "آدرس خود را وارد کنید.";
            }
            if (values.password === "") {
                errors.password = "رمز عبور خود را وارد کنید.";
            } else if (values.password.length < 8) {
                errors.password = "رمز عبور باید حداقل 8 کاراکتر باشد.";
            }
            return errors;
        },
    });


    return (
        <>
            <NavbarHome />
            <div className="flex items-center justify-center min-h-screen pt-30 pb-9 px-2 bg-gray-100 dark:bg-zinc-700" dir='rtl'>
                <div className="w-[670px] bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 shadow-lg rounded-xl overflow-hidden">
                    <div
                        className="w-full h-40 bg-cover bg-center"
                        style={{ backgroundImage: `url(${registerPhoto?.src})` }}>
                    </div>
                    <form className="px-8 py-6" onSubmit={form.handleSubmit}>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                name="name"
                                className="w-full p-3 pr-12 bg-gray-200 dark:bg-gray-700 text-zinc-700 dark:text-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="نام کاربری خود را وارد کنید."
                                autoComplete="off"
                                onChange={form.handleChange}
                                value={form.values.name}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.name && form.touched.name && <div className='mt-3 text-rose-600'>{form.errors.name}</div>}
                            <div className='absolute top-3.5 right-4 text-orange-400 text-xl'>
                                <FaRegUser />
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-3 pr-12 bg-gray-200 dark:bg-gray-700 text-zinc-700 dark:text-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="ایمیل خود را وارد کنید."
                                autoComplete="off"
                                onChange={form.handleChange}
                                value={form.values.email}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.email && form.touched.email && <div className='mt-3 text-rose-600'>{form.errors.email}</div>}
                            <div className='absolute top-3.5 right-4 text-orange-400 text-xl'>
                                <FaAt />
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="number"
                                name="phone"
                                className="w-full p-3 pr-12 bg-gray-200 dark:bg-gray-700 text-zinc-700 dark:text-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="شماره تماس خود را وارد کنید."
                                autoComplete="off"
                                onChange={form.handleChange}
                                value={form.values.phone}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.phone && form.touched.phone && <div className='mt-3 text-rose-600'>{form.errors.phone}</div>}
                            <div className='absolute top-3.5 right-4 text-orange-400 text-xl'>
                                <FiPhone />
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                name="address"
                                className="w-full p-3 pr-12 bg-gray-200 dark:bg-gray-700 text-zinc-700 dark:text-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="آدرس خود را وارد کنید."
                                autoComplete="off"
                                onChange={form.handleChange}
                                value={form.values.address}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.address && form.touched.address && <div className='mt-3 text-rose-600'>{form.errors.address}</div>}
                            <div className='absolute top-3.5 right-4 text-orange-400 text-xl'>
                                <GrLocation />
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="password"
                                name="password"
                                className="w-full p-3 pr-12 bg-gray-200 dark:bg-gray-700 text-zinc-700 dark:text-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="رمز عبور خود را وارد کنید."
                                autoComplete="off"
                                onChange={form.handleChange}
                                value={form.values.password}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.password && form.touched.password && <div className='mt-3 text-rose-600'>{form.errors.password}</div>}
                            <div className='absolute top-3.5 right-4 text-orange-400 text-xl'>
                                <LuKeySquare />
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white cursor-pointer bg-orange-400 hover:bg-orange-500 transition-colors duration-300 py-2 text-lg rounded-lg shadow">
                            ایجاد حساب کاربری
                        </button>
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
                            <span className="absolute px-3 font-medium text-gray-700 dark:text-gray-400 -translate-x-1/2 bg-white dark:bg-zinc-800 left-1/2">اتصال حساب</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-1/2 border text-nowrap border-red-500 text-red-500 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-red-500 hover:text-gray-100 transition-colors duration-300">
                                <FaGoogle className='hidden sm:block' /> حساب گوگل
                            </button>
                            <button className="w-1/2 border text-nowrap border-blue-500 text-blue-500 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-500 hover:text-gray-100 transition-colors duration-300">
                                <FaFacebook className='hidden sm:block' /> حساب فیس بوک
                            </button>
                        </div>
                        <div className="flex justify-center items-center gap-1 mt-5 text-white">
                            <Link href="/" className="text-gray-700 dark:text-gray-100 hover:text-orange-400 transition-colors duration-300">بازگشت به صفحه اصلی</Link>
                            <div className='text-orange-400 mt-1'>
                                <FaRegArrowAltCircleLeft />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
