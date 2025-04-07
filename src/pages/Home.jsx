import React from 'react'
import { ToastContainer} from 'react-toastify';

import About from '../components/Home/About';
import Sectors from '../components/Home/Sectors';
import Projects from '../components/Home/Projects';
import OurApproach from '../components/Home/OurApproach';
import Testimonials from '../components/Home/Testimonials';
import Contact from '../components/Home/Contact';




const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
     
      <ToastContainer/>
     
      <About/>
      <Sectors/>
      <Projects/>
      <OurApproach/>
      <Testimonials/>
      <Contact/>
     
    </div>
  )
}

export default Home
