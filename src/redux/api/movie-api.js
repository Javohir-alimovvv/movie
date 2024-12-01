import { api } from './index'

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query({
      query: (params) => ({ 
        url: '/movie/upcoming', 
        params 
      }),
      providesTags: ["Movie"]
    }),
  }),
})


export const {
    useGetMovieQuery
} = movieApi

