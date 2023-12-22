import React from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import Vlad from '../../pages/Vlad'
import Artem from '../../pages/Artem'
import Oleg from '../../pages/Oleg'
import Gena from '../../pages/Gena'
import {
  ARTEM_ROUTE,
  GENA_ROUTE,
  VLAD_ROUTE,
  OLEG_ROUTE,
} from '../routing/config'

const MainRouter = ({ isAuth = false }) => {
  const basedPath: RouteObject[] = [
    { path: ARTEM_ROUTE, element: <Artem /> },
    { path: VLAD_ROUTE, element: <Vlad /> },
    { path: '*', element: <Navigate to={'/'} replace /> }, // в базовых маршрутах отвечает за перенаправление на определенный маршрут, если пользователь попадает на несуществующий маршрут.
  ]

  const authPath: RouteObject[] = [
    { path: GENA_ROUTE, element: <Gena /> },
    { path: OLEG_ROUTE, element: <Oleg /> },
  ]

  const resultPaths: RouteObject[] = basedPath

  if (isAuth) {
    resultPaths.push(...authPath)
  }
  return useRoutes(resultPaths)
}

export default MainRouter
