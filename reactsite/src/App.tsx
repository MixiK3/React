import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import GlobalStyles from './global-styles'
import TableComponent from './components/TableComponent'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />
      <TableComponent />
    </div>
  )
}

export default App
