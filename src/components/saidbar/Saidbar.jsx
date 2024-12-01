import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiTv2Fill, RiCoupon3Fill } from "react-icons/ri";
import { MdOutlinePhonelink, MdSunny, MdOutlineWbSunny } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { IoChevronDownOutline, IoMenu, IoClose } from "react-icons/io5";

const Saidbar = ({ isOpen, toggleSidebar, darkMode }) => {


    return (
        <>

            <div className="relative">
                {isOpen && (
                    <div
                        onClick={toggleSidebar}
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity"
                    ></div>
                )}

                <div
                    className={`absolute top-0 left-0 w-full flex items-center justify-center bg-darc  dark:bg-text shadow-lg overflow-hidden transition-all duration-500 ease-in-out z-20 ${isOpen ? "max-h-screen" : "max-h-0"
                        }`}
                >
                    <div className='flex flex-col items-center justify-center px-4 py-3'>
                        <ul className='flex gap-5 flex-col m items-center justify-center mb-5'>
                            <li className='font-medium text-xs text-secondary'>
                                <NavLink to={"/"}><span className='flex items-center justify-start gap-1.5'><RiTv2Fill className='text-2xl' /> Афиша</span></NavLink>
                            </li>
                            <li className='font-medium text-xs text-secondary'>
                                <NavLink to={"/sessions"}><span className='flex items-center justify-start gap-1.5'><MdOutlinePhonelink className='text-2xl' /> Сеансы</span></NavLink>
                            </li>
                            <li className='font-medium text-xs text-secondary'>
                                <NavLink to={"/tickets"}><span className='flex items-center justify-start gap-1.5'><RiCoupon3Fill className='text-2xl' /> Билеты</span></NavLink>
                            </li>
                            <li className='font-medium text-xs text-secondary'>
                                <NavLink to={"/search"}><span className='flex items-center justify-start gap-1.5'><FiSearch className='text-2xl' /> Поиск</span></NavLink>
                            </li>
                        </ul>
                        <nav className='flex gap-5  items-center justify-center flex-col'>
                            <button onClick={darkMode} className='bg-bgtwo w-12 h-12 rounded-xl flex items-center justify-center'>
                                <MdSunny className='text-3xl text-text' />
                            </button>
                            <div className='bg-bgtwo w-24 h-12 rounded-xl flex items-center justify-center relative'>
                                <div className='flex gap-2 items-center '>
                                    <GrLanguage className='text-2xl text-text' />
                                    <h3 className='text-text text-sm font-medium'>Ру</h3>
                                    <IoChevronDownOutline className='text-text text-xl font-medium' />
                                </div>
                                <div></div>
                            </div>
                            <button className='w-44 h-14 bg-main text-text text-base font-medium rounded-xl hover:bg-text border border-main'>Войти</button>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Saidbar