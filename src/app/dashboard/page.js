'use client'

import React, { useEffect } from 'react'
import Sidebar from '../sidebar/page'
import Nav from '../nav/page'
export default function page() {

  // useEffect(()=>{
  //   const localUser = JSON.parse(localStorage.getItem('username'))
  //   console.log(localUser)
  // },[])

  
    
  return (
    <>
      {/* Layout wrapper */}
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
     <Sidebar/>
      {/* Layout container */}
      <div className="layout-page">
        <Nav/>
  

      </div>
      {/* / Layout page */}
      
    </div>
    
    {/* Overlay */}
    <div className="layout-overlay layout-menu-toggle" />
  </div>
  {/* / Layout wrapper */}
    </>
  )
}
