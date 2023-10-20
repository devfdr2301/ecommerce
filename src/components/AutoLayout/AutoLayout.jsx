import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const AutoLayout = () => {
  return (
    <div>
       <Navbar/>
       <Header/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default AutoLayout
