import React from 'react'
import foterLogo from "../../assets/images/logofoo.png"
import apple from "../../assets/images/apple.png"
import play from "../../assets/images/play.png"
import { Link, NavLink } from "react-router-dom"
import { FiPhone } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { RiYoutubeLine, RiFacebookCircleLine, RiShiningLine, RiFileList2Line, RiBasketballLine, RiMovie2Line, RiClapperboardLine, RiMovieLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";



const Footer = () => {
  return (
    <>

      <div className='flex container px-4'>
        <div className='w-full rounded-xl mb-10 flex items-start justify-between bg-bgtheree px-8 py-8 dark:bg-lite max-xl:flex-col max-xl:gap-10'>
          <div className='flex w-full items-start justify-around max-md:gap-[120px] max-sm:flex-col max-sm:gap-10'>
            <div className=''>
              <Link to={'/'}><img className='w-[55px] h-[36px] mb-12' src={foterLogo} alt="" /></Link>
              <Link to={'https://chromewebstore.google.com/'}><img className='w-36 h-11 mb-2' src={play} alt="" /></Link>
              <Link to={'https://chromewebstore.google.com/'}><img className='w-36 h-11' src={apple} alt="" /></Link>
            </div>
            <ul className='flex gap-4 flex-col items-start'>
              <li className='text-base text-text  font-medium dark:text-secondary'>
                <span>О нас</span>
              </li>
              <li className='flex gap-2 items-center justify-start'>
                <span className='text-2xl text-main font-medium'><RiFileList2Line /></span>
                <NavLink to={"/search"}><span className='text-base text-secondary font-medium'>Публичная оферта</span></NavLink>
              </li>
              <li className='flex gap-2 items-center justify-start'>
                <span className='text-2xl text-main font-medium'><RiShiningLine /></span>
                <NavLink to={"/search"}><span className='text-base text-secondary font-medium'>Реклама</span></NavLink>
              </li>
              <li className='flex gap-2 items-center justify-start'>
                <span className='text-2xl text-main font-medium'><BsQuestionCircle /></span>
                <NavLink to={"/search"}><span className='text-base text-secondary font-medium'>F.A.Q</span></NavLink>
              </li>
              <li className='flex gap-2 items-center justify-start'>
                <span className='text-2xl text-main font-medium'><FiPhone /></span>
                <NavLink to={"/search"}><span className='text-base text-secondary font-medium'>Контакты</span></NavLink>
              </li>
            </ul>
          </div>
          <div className='flex w-full items-start justify-around max-md:gap-40 max-sm:flex-col max-sm:gap-10'>
            <ul className='flex gap-4 flex-col items-start'>
              <li className='text-base text-text  font-medium dark:text-secondary'>
                <span>Категории</span>
              </li>
              <li className='flex gap-2 items-center justify-start'>
                <span className='text-2xl text-main font-medium'><RiMovieLine /></span>
                <NavLink to={'/sessions'}><span className='text-base text-secondary font-medium'>Кино</span></NavLink>
              </li>
              <li className='flex gap-2 items-center justify-start'>
                <span className='text-2xl text-main font-medium'><RiClapperboardLine /></span>
                <NavLink to={'/sessions'}><span className='text-base text-secondary font-medium'>Театр</span></NavLink>
              </li>
              <li className='flex gap-2 items-center justify-start'>
                <span className='text-2xl text-main font-medium'><RiMovie2Line /></span>
                <NavLink to={'/sessions'}><span className='text-base text-secondary font-medium'>Концерты</span></NavLink>
              </li>
              <li className='flex gap-2 items-center justify-start'>
                <span className='text-2xl text-main font-medium'><RiBasketballLine /></span>
                <NavLink to={'/sessions'}><span className='text-base text-secondary font-medium'>Спорт</span></NavLink>
              </li>
            </ul>
            <div className='flex gap-14 flex-col items-start'>
              <div className='flex gap-5 flex-col items-start'>
                <li className='text-base text-text font-medium dark:text-secondary'>Связаться с нами</li>
                <a className='text-xl text-main font-medium' href="tel: +998948152522">+998 (94) 815-25-22</a>
              </div>
              <div className='flex gap-5 flex-col items-start'>
                <li className='text-base text-text font-medium dark:text-secondary'>Социальные сети</li>
                <div className='flex gap-5'>
                  <Link to={"https://www.instagram.com/"} className='text-2xl text-main font-medium'><FaInstagram /></Link>
                  <Link to={"https://www.facebook.com/"} className='text-2xl text-main font-medium'><RiFacebookCircleLine /></Link>
                  <Link to={"https://www.youtube.com/"} className='text-2xl text-main font-medium'><RiYoutubeLine /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer