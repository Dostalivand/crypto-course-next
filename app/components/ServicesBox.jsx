import React from 'react'

export default function ServicesBox({ bgColor, image, icon, title, description }) {
    return (
        <div className="container my-10 cursor-pointer group">
            <div className={`${bgColor} shadow-xs rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay`}
                style={{ backgroundImage: `url(${image?.src})` }}>
                <div className="shadow-xs p-4 md:p-8 backdrop-blur-xs group-hover:backdrop-blur-none duration-300 space-y-3 rounded-xl">
                    <div className='flex items-center gap-1'>
                        <span className='text-center text-3xl text-white'>{icon}</span>
                        <h1 className="text-xl Dana-Bold text-white">{title}</h1>
                    </div>
                    <p className='text-base text-justify'>{description}</p>
                </div>
            </div>
        </div>
    );
}
