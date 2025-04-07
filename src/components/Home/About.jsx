import React from 'react'
import brandImg from '../../assets/brand_img.png'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div
    // initial={{opacity: 0, x:-200}}
    //   transition={{duration: 1}}
    //   whileInView={{opacity: 1, x:0}}
    //   viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' 
    id='About'>
      <motion.h1
     initial={{opacity: 0, y:100}}
     transition={{duration: 1, ease: "easeOut"}}
     whileInView={{opacity: 1, y:0}}
     viewport={{once: true}}
      className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light decoration-gray-900 text-[#fc9908]'>Our Company</span></motion.h1>
      <motion.p
       initial={{opacity: 0, y:-100}}
       transition={{duration: 1, ease: "easeOut"}}
       whileInView={{opacity: 1, y:0}}
       viewport={{once: true}}
      className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to your Vision</motion.p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <motion.img
        initial={{opacity: 0, x:-200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
        src={brandImg} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <motion.div
        initial={{opacity: 0, x:200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
        className='flexflex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>10+</p>
                    <p>Years of Excellence</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>12+</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>20+</p>
                    <p>Mn. Sq. Ft. Delivered</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>25+</p>
                    <p>Ongoing Projects</p>
                </div>
            </div>
            <p className='my-10 max-w-lg'>BigByte Innovation Pvt. Ltd. (BIPL) was founded in 2012 by two management graduates with extensive industry experience. They identified a gap in technologically advanced yet affordable products in African and CIS markets and aimed to bridge it by partnering with Indian manufacturers lacking export exposure. Over time, BIPL has diversified into multiple industries, including power plants, agro-tech, telecom, education, healthcare, and IT services. The company leverages its global network, in-house engineering team, and proactive approach to ensure quality, timely delivery, and successful project execution. It also provides manpower support for turnkey projects, ensuring operational efficiency and customer satisfaction.</p>
            <button className='text-white px-8 py-2 rounded' style={{ backgroundColor: '#fc9908'}}>Learn More</button>
        </motion.div>
      </div>
    </div>
  )
}

export default About
