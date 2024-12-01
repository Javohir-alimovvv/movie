import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Sessions from '../pages/sessions/Sessions'
import Tickets from '../pages/tickets/Tickets'
import Search from '../pages/search/Search'
import Profile from '../pages/profile/Profile'
import Login from '../pages/login/Login'
import Error from '../pages/error/Error'
const RouterComponent = () => {

  

  return (
    <>
      <div className='bg-darc dark:bg-text duration-300'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sessions" element={<Sessions />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="search" element={<Search />} />
          </Route>

          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default RouterComponent 