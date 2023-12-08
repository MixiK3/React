import React from 'react'
import Artem from './pages/Artem'
import Vlad from './pages/Vlad'
import { ARTEM_ROUTE, VLAD_ROUTE } from './App/routing/config'
import { useRoutes } from 'react-router-dom'

const MainRouter = () => {
  return useRoutes([
    { path: ARTEM_ROUTE, element: <Artem /> },
    { path: VLAD_ROUTE, element: <Vlad /> },
  ])
}

export default MainRouter
