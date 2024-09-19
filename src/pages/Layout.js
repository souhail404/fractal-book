import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Layout = () => {
  return (
    <>
      <Header />
      <main id='main-wrapper'>
        <Outlet />
        <ToastContainer />
      </main>
      <Footer />
    </>
  )
}

export default Layout