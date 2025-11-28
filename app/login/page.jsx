"use client"
import React from 'react'
import loginPhoto from '@/app/Images/login-photo.jpeg'
import Footer from '@/app/components/Footer'
import { LuKeySquare } from "react-icons/lu";
import { FaGoogle, FaFacebook, FaRegArrowAltCircleLeft, FaRegUser } from "react-icons/fa";
import { useFormik } from "formik";
import NavbarHome from '@/app/components/NavbarHome'
import Link from 'next/link';

export default function Login() {

    const form = useFormik({
        initialValues: { name: "", password: "" },
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
                errors.name = "وارد کردن نام کاربری الزامیست.";
            }
            if (values.password === "") {
                errors.password = "رمز عبور خود را وارد کنید.";
            }
            return errors;
        },
    });

    return (
        <>
            <NavbarHome />
            <div className="flex items-center justify-center min-h-screen pt-30 pb-9 px-2 bg-gray-100 dark:bg-zinc-700" dir='rtl'>
                <div className="w-[670px] bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 shadow-lg rounded-2xl overflow-hidden">
                    <div
                        className="w-full h-40 bg-cover bg-center shadow"
                        style={{ backgroundImage: `url(${loginPhoto?.src})` }}>
                    </div>
                    <form onSubmit={form.handleSubmit} className="px-8 py-6">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                name="name"
                                className="w-full p-3 pr-12 bg-gray-200 dark:bg-gray-700 text-zinc-700 dark:text-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="نام کاربری خود را وارد کنید."
                                autoComplete="off"
                                value={form.values.name}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.name && form.touched.name && <div className='mt-3 text-rose-600'>{form.errors.name}</div>}
                            <div className='absolute top-3.5 right-4 text-orange-400 text-xl'>
                                <FaRegUser />
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="password"
                                name="password"
                                className="w-full p-3 pr-12 bg-gray-200 dark:bg-gray-700 text-zinc-700 dark:text-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="رمز عبور خود را وارد کنید."
                                autoComplete="off"
                                value={form.values.password}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.password && form.touched.password && <div className='mt-3 text-rose-600'>{form.errors.password}</div>}
                            <div className='absolute top-3.5 right-4 text-orange-400 text-xl'>
                                <LuKeySquare />
                            </div>
                        </div>
                        <button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-gray-100 transition-colors duration-300 py-2 text-lg rounded-lg shadow"
                            type="submit"
                            disabled={form.isSubmitting}
                        >
                            ورود
                        </button>
                        <Link href="/register" className="w-full cursor-pointer mt-3 bg-orange-400 hover:bg-orange-500 text-gray-100 transition-colors duration-300 py-2 text-lg rounded-lg shadow text-center block">
                            حساب کاربری ندارید؟ اینجا کلیک کنید
                        </Link>
                        <div className="flex justify-between items-center mt-3 text-sm">
                            <label className="flex items-center text-zinc-700 dark:text-gray-300">
                                <input type="checkbox" className="me-1" /> منو فراموش نکن!
                            </label>
                            <a href="#forget" className="text-orange-400 hover:text-orange-500">رمز خودتو فراموش کردی؟</a>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <button className="w-1/2 border text-nowrap border-red-500 text-red-500 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-red-500 hover:text-gray-100 transition-colors duration-300">
                                <FaGoogle className='hidden sm:block' /> حساب گوگل
                            </button>
                            <button className="w-1/2 border text-nowrap border-blue-500 text-blue-500 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-500 hover:text-gray-100 transition-colors duration-300">
                                <FaFacebook className='hidden sm:block' /> حساب فیس بوک
                            </button>
                        </div>
                        <div className="border-t border-neutral-200 dark:border-white/10 mt-6"></div>
                        <div className="flex justify-center items-center gap-1 mt-5 text-white">
                            <Link href="/" className="text-zinc-700 dark:text-white hover:text-orange-400 transition-colors duration-300">بازگشت به صفحه اصلی</Link>
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

