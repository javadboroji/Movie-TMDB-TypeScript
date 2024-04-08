import React, { Children, ReactNode } from 'react'
import HeaderAnt from '../../Component/Heaader/Header'
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
 
interface LayoutProps {
    children: React.ReactNode;
  }


function Layout({children}:LayoutProps) {
  return (
    <>
         <HeaderAnt />
         <Outlet />
         {children}
         <Footer/>
    </>
  )
}

export default Layout