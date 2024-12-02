import React, { useState } from 'react'
import Hero from '../../components/hero/Hero'
import Reels from '../../components/reels/Reels'
import Category from '../../components/category/Category'
import Pagination from '@mui/material/Pagination';
import { useGetMovieQuery } from '../../redux/api/movie-api';


const Home = () => {
  const [movie, setMovie] = useState("now_playing")
  const { data } = useGetMovieQuery()


  return (
    <>
      <Category movie={movie} setMovie={setMovie} />
      <Hero movie={movie}/>
      <Reels movie={movie}/>

      <div className='container mt-5 mb-8 flex justify-center items-center'>
        <Pagination count={data?.total_pages} />
      </div>

    </>
  )
}

export default Home