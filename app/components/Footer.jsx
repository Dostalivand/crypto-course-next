import React from "react";
import wave from '@/app/Images/wave.gif'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import backgroundImg from '@/app/Images/footer-pattern.jpg'
import Image from "next/image";


const FooterLinks = [
    { title: "پرسش های متداول", link: "/#home" },
    { title: "نحوه خرید دوره", link: "/#about" },
    { title: "خدمات دوره ها", link: "/#contact" },
    { title: "درباره ما", link: "/#blog" },
];

export default function Footer() {
    return (
        <div className="bg-bottom bg-no-repeat bg-cover h-full w-full text-white relative" style={{ backgroundImage: `url(${backgroundImg?.src})` }} dir="rtl">
            <div className="container relative">
                <div data-aos="zoom-in" className="grid md:grid-cols-3 pt-5">
                    <div className="py-8 px-4">
                        <h1 className="text-orange-300 sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 Moraba-Medium">
                            آکادمی ارزهای دیجیتال
                        </h1>
                        <p className="text-justify text-gray-300">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 z-90">
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className="py-8 px-4">
                                <h1 className="sm:text-xl text-xl text-orange-300 Dana-Bold sm:text-right text-justify mb-3">
                                    {index === 0 ? "دسترسی سریع" : "دوره های آموزشی"}
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.link}
                                                className="inline-block hover:text-orange-300 cursor-pointer hover:text-primary transition-colors duration-300 text-gray-200"
                                            >
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="pr-4">
                            <div className="flex items-center text-3xl text-orange-300 gap-3 mt-6">
                                <a href="https://wa.me/989128408867"><BsWhatsapp className="hover:text-orange-400 transition-colors duration-300" /></a>
                                <a href="https://github.com/Dostalivand"><BsGithub className="hover:text-orange-400 transition-colors duration-300" /></a>
                                <a href="https://www.linkedin.com/in/dostalivand"><FaLinkedin className="hover:text-orange-400 transition-colors duration-300" /></a>
                            </div>
                            <div className="mt-6 text-nowrap">
                                <div className="flex items-center text-gray-300 gap-1">
                                    <span className="text-orange-300">طراح : </span>
                                    <p>حسین دوستعلی وند</p>
                                </div>
                                <div className="flex items-center text-gray-300 gap-1 mt-3">
                                    <FaLocationDot className="text-orange-300" />
                                    <p>تهران . پونک</p>
                                </div>
                                <div className="flex items-center text-gray-300 gap-1 mt-3">
                                    <FaPhoneVolume className="text-orange-300" />
                                    <span className="text-orange-300">همراه : </span>
                                    <p>09128408867</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image
                        src={wave}
                        alt=""
                        className="h-50 -mt-22 w-full object-cover mix-blend-screen relative z-0"
                    />
                </div>
            </div>
        </div>
    );
}





