import { api } from './index'

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query({
      query: (params) => ({ 
        url: '/movie/now_playing', 
        params 
      }),
      providesTags: ["Movie"]
    }),
  }),
})


export const {
    useGetMovieQuery
} = movieApi

