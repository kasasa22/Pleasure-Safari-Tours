import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';

const MainLayout = () => {
  return (
    <>
    <Navbar />
      <Outlet/>
      <Footer />
    </>
  )
}

export default MainLayout
