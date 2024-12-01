import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/images/logo.png'
import { RiTv2Fill, RiCoupon3Fill } from "react-icons/ri";
import { MdOutlinePhonelink, MdSunny, MdOutlineWbSunny } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { IoChevronDownOutline, IoMenu, IoClose } from "react-icons/io5";
import Saidbar from '../saidbar/Saidbar';
import { useEffect } from 'react';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [DarcMode, setDarcMode] = useState(false)


  useEffect(() => {
    const value = localStorage.getItem('theme')
    if (value) {
      document.body.classList.add(value)
    }
  }, [])
  const darkMode = () => {
    setDarcMode(!DarcMode)
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.setItem('theme', '')
    }
  }


  // const darkMode = () => {
  //   document.body.classList.toggle("dark")
  // }
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>

      <header className='container flex px-4'>
        <div className='flex w-full justify-between h-20 items-center md:max-xl:gap-9'>
          <Link className='w-28 h-9' to={'/'}><img className='w-full h-full' src={logo} alt="" /></Link>
          <div className='flex gap-28 items-center max-lg:gap-8'>
            <ul className='flex gap-8 md:max-md:hidden'>
              <li className='font-medium text-xs text-secondary max-[480px]:hidden dark:text-darc'>
                <NavLink to={"/"}><span className='flex flex-col items-center justify-center gap-1.5'><RiTv2Fill className='text-2xl' /> Афиша</span></NavLink>
              </li>
              <li className='font-medium text-xs text-secondary max-[420px]:hidden dark:text-darc'>
                <NavLink to={"/sessions"}><span className='flex flex-col items-center justify-center gap-1.5'><MdOutlinePhonelink className='text-2xl' /> Сеансы</span></NavLink>
              </li>
              <li className='font-medium text-xs text-secondary max-[380px]:hidden dark:text-darc'>
                <NavLink to={"/tickets"}><span className='flex flex-col items-center justify-center gap-1.5'><RiCoupon3Fill className='text-2xl' /> Билеты</span></NavLink>
              </li>
              <li className='font-medium text-xs text-secondary dark:text-darc'>
                <NavLink to={"/search"}><span className='flex flex-col items-center justify-center gap-1.5 max-[360px]:flex-row'><FiSearch className='text-2xl' /> Поиск</span></NavLink>
              </li>
            </ul>
            <nav className='flex gap-5 items-center md:max-lg:hidden max-md:hidden '>
              <button onClick={darkMode} className='bg-bgtwo w-12 h-12 rounded-xl flex items-center justify-center hover:bg-secondary'>
                <MdSunny className='text-3xl text-text hover:text-darc ' />
              </button>
              <div className='bg-bgtwo w-24 h-12 rounded-xl flex items-center justify-center relative'>
                <div className='flex gap-2 items-center '>
                  <GrLanguage className='text-2xl text-main' />
                  <h3 className='text-text text-sm font-medium'>Ру</h3>
                  <IoChevronDownOutline className='text-text text-xl font-medium' />
                </div>
                <div></div>
              </div>
              <button className='w-44 h-14 bg-main text-text text-base font-medium rounded-xl hover:bg-text border border-main'>Войти</button>
            </nav>
          </div>
          <button onClick={toggleSidebar} className='hidden bg-none text-secondary dark:text-darc text-2xl max-lg:block'>{isOpen ? <IoClose /> : <IoMenu />}</button>
        </div>
      </header>
      <Saidbar darkMode={darkMode} isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Header