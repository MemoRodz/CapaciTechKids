import React from 'react'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
function Layout(props) {
const { children}=props
  return (
    <>
        <Nav/>
            {children}
        <Footer/>
    </>
  )
}

export default Layout