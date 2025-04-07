
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import menuIcon from '../assets/menu_icon.svg';
import crossIcon from '../assets/cross_icon.svg';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] =useState(false)

  useEffect(()=>{
      if(showMobileMenu){
        document.body.style.overflow = 'hidden'
      }else{
        document.body.style.overflow = 'auto'
      }
      return()=>{
        document.body.style.overflow = 'auto'
      };
  },[showMobileMenu])

  return (
    <div className='absolute top-5 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={logo} alt="Logo" className="w-40 h-auto"/>
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer' style={{
                 transition: 'color 0.3s',}}
                onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
                 onMouseLeave={(e) => (e.target.style.color = '')}>Home</a>
                <a href="#About" className='cursor-pointer' style={{
                 transition: 'color 0.3s',}}
                onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
                 onMouseLeave={(e) => (e.target.style.color = '')}>About</a>
                <a href="#Projects" className='cursor-pointer' style={{
                 transition: 'color 0.3s',}}
                onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
                 onMouseLeave={(e) => (e.target.style.color = '')}>Projects</a>
                <a href="#Testimonials" className='cursor-pointer' style={{
                 transition: 'color 0.3s',}}
                onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
                 onMouseLeave={(e) => (e.target.style.color = '')}>Testimonials</a>
                <a href="#Partners" className='cursor-pointer' style={{
                 transition: 'color 0.3s',}}
                onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
                 onMouseLeave={(e) => (e.target.style.color = '')}>ContactUs</a>
            </ul>
            <button className='hidden md:block px-8 py-2 rounded-full' style={{ backgroundColor: '#fc9908'}}>Sign up</button>
            <img onClick={()=> setShowMobileMenu(true)} src={menuIcon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/* -------------------mobile-menu------------ */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} src={crossIcon} className='w-6' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>About Us</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Sectors</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Partners</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Sign up</a>
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar

