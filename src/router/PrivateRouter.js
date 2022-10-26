import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Home from '../pages/home/Home'

const PrivateRouter = ({login,setLogin}) => {
  return (
    
      login ? <Home/> : <Navigate to="/home" /> 
    
  )
}

export default PrivateRouter