import './Reels.scss'
import { Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { useGetMovieQuery } from '../../redux/api/movie-api';
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom"

const Reels = () => {
    const { data } = useGetMovieQuery()


    return (
        <>

            <div className='container px-4'>
                <div className='w-full flex items-start justify-center flex-col'>
                    <div className='flex w-full mb-6 items-center justify-between'>
                        <h3 className='text-xl text-text font-medium dark:text-darc'>На неделе</h3>
                        <Link to={'/'}><span className='text-base text-main font-medium flex items-center'>Показать все<IoChevronForward className='text-lg' /></span></Link>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            450: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination]}
                        className="w-full h-[440px] py-4"
                    >
                        {
                            data?.results?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className='w-full h-[400px] rounded-xl relative cursor-pointer overflow-hidden image__carusel'>
                                        <img className='w-full h-full rounded-xl object-cover  doctor' src={import.meta.env.VITE_IMAGE_URL + item.backdrop_path} alt="" />
                                        <div className='flex items-start justify-end gap-2 flex-col absolute bottom-0 opacity-0 hover__box'>
                                            <h3 className='text-main text-2xl bottom-0 font-bold ml-10'>{`Title: ${ item.title}`}</h3>
                                            <h3 className='text-text text-base bottom-0 font-medium mb-8 ml-10'> {`Popularity: ${ item.popularity}`}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default Reels
