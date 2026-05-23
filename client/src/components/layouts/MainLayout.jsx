"use client"
import React from 'react'
import Navbar from '@/features/mainpage/components/Navbar'
import Footer from '@/features/mainpage/components/Footer'


const MainLayout = ({ children }) => {
  return (
    <div id='MainLayout' className="flex flex-col h-screen">
       <div id='Navbar'>
              <Navbar />
       </div>
      <main id='scrollable' className='flex-1 overflow-y-auto'>
             {children}
      </main>
      <div id='Footer'>
           <Footer />
      </div>
    </div>
  )
}

export default MainLayout