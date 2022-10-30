import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/home/Home"
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact";
import Details from "../pages/details/Details";
import About from "../pages/about/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        

    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/details' element={<Details/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />

    </Routes>
 </BrowserRouter>
  )
}

export default AppRouter