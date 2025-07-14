"use client"
import React from 'react'
import Navbar from '../foundation/Navbar'
import Footer from '../foundation/Footer'


const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout