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


const Hero = () => {
    const { data } = useGetMovieQuery()
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
                                    <div className='relative w-full h-full'>
                                        <img className='w-full h-full' src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} alt="" />
                                        <div className='absolute z-10 bottom-8 flex mx-0 items-center justify-center flex-col gap-4'>
                                            <h3 className='text-3xl text-text font-medium'>{movie.title}</h3>
                                            <div className='flex gap-2'>
                                                <p className='text-sm text-text font-medium'>2024</p>
                                            </div>
                                            <button className='w-96 h-[52px] flex gap-2 items-center justify-center bg-text rounded-xl text-main border-2 border-solid border-transparent  play__btn text-base'><FaPlay className='text-2xl' /> Смотреть</button>
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
                                    <img className='rounded-xl' src={import.meta.env.VITE_IMAGE_URL + content.poster_path} alt="" />
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