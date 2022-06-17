import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Splash from '../pages/splash/Splash'

export const routes = {
  HOME: '/',
  SPLASH: '/splash',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  RESUME: '/resume',
}

const RoutesPage = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.SPLASH} element={<Splash />}></Route>
    </Routes>
  )
}

export default RoutesPage
