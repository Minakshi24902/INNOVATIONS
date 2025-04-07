// import React from 'react'
// import Navbar from '../Navbar'
// import { motion} from "framer-motion"


// const Header = () => {
//   return (
//     <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/head1.jpg')"}} id='header'>
      
//       <Navbar/>
//       <motion.div
//       initial={{opacity: 0, y:100}}
//       transition={{duration: 1.5}}
//       whileInView={{opacity: 1, y:0}}
//       viewport={{once: true}}
//       className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
//         <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Let's make your thinking in reality. </h2>
//         <div className='space-x-6 mt-16'>
//           <a href="#Projects" className='border border-white px-8 py-3 roundedd'>Projects</a>
//           <a href="#Contact" className=' px-8 py-3 roundedd'style={{ backgroundColor: '#fc9908'}}>Contact Us</a>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default Header
import React from 'react';
import Navbar from '../Navbar';
import { motion } from "framer-motion";
import { FlipWords } from './FlipWords';  // ✅ same folder

const Header = () => {
  const words = ["thinking", "ideas", "dreams", "vision"];

  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/head1.jpg')" }} id='header'>

      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
          Let's make your <FlipWords words={words} /> in reality.
        </h2>
        <div className='space-x-6 mt-16'>
          <a href="#Projects" className='border border-white px-8 py-3 roundedd'>Projects</a>
          <a href="#Contact" className='px-8 py-3 roundedd' style={{ backgroundColor: '#fc9908' }}>Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header;
