import React from 'react'
import Vlad from '../../pages/Vlad'
import { ARTEM_ROUTE, VLAD_ROUTE } from './config'
import Artem from '../../pages/Artem'
import { useRoutes } from 'react-router-dom'

const MainRouter = () => {
  return useRoutes([
    { path: ARTEM_ROUTE, element: <Vlad /> },
    { path: VLAD_ROUTE, element: <Artem /> },
    // { path: "*", element: <Navigate to={UNIVERSITIES_ROUTE} replace />},
  ])
}

export default MainRouter
