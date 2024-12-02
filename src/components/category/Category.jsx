import React from 'react'
import { MOVIE_LISTS } from '../../static'

const Category = ({ movie, setMovie }) => {
    return (
        <>

            <div className='container px-4 my-5'>
                <div className='w-full flex items-center justify-start gap-4'>
                    {
                        MOVIE_LISTS?.map((pro) => (
                            <button onClick={() => setMovie(pro.path)} key={pro.id} className='bg-text rounded-xl w-36 h-12 text-main text-lg font-semibold dark:bg-main dark:text-text category__btn'>{pro.title}</button>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Category