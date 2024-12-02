import { useGetMovieQuery } from '../../redux/api/movie-api'
import "./Hero.scss"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FaPlay } from "react-icons/fa";


const Hero = ({ movie }) => {
    const { data } = useGetMovieQuery({ type: movie, params: { page: 1 } })
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className='hero__content'>
                <div className='hero__swiper__group'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#C61F1F',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper__big"
                    >
                        {
                            data?.results?.map((movie) => (
                                <SwiperSlide key={movie.id}>
                                    <div className='relative w-full h-full max-sm:h-[400px]'>
                                        <img className='w-full h-full object-cover' src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path} alt="" />
                                        <div className='absolute z-10 bottom-8 left-[50%] translate-x-[-50%] flex mx-0 items-center justify-center flex-col gap-4 max-sm:bottom-16'>
                                            <h3 className='text-5xl text-main font-medium max-sm:text-3xl'>{movie.title}</h3>
                                            <div className='flex gap-2'>
                                                <p className='text-sm text-text font-medium'>{movie.release_date}</p>
                                            </div>
                                            <button className='w-96 h-[52px] flex gap-2 items-center justify-center bg-text rounded-xl text-main border-2 border-solid border-transparent  play__btn text-base max-sm:w-56 '><FaPlay className='text-2xl' /> Смотреть</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper__small"
                    >
                        {
                            data?.results?.map((content) => (
                                <SwiperSlide key={content.id} className='rounded-xl'>
                                    <img className='rounded-xl object-cover w-full h-full ' src={import.meta.env.VITE_IMAGE_URL + content.poster_path} alt="" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Hero