import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c05e2370-573e-418c-818b-4f1d4ffb3269");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };


  return (
    <div className='bg-gray-100 text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <motion.h1
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light decoration-gray-900 text-[#fc9908]'>With Us</span></motion.h1>
      <motion.p
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Vision Together</motion.p>



<motion.form
initial={{opacity: 0, x:-200}}
transition={{duration: 1}}
whileInView={{opacity: 1, x:0}}
viewport={{once: true}}
onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
            Hello! I'm
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='name' placeholder='Type Your Name*' required />
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4'>
            You can reach me through
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='email' placeholder='Type your email*' required />
        </div>
    </div>
    <div className='my-6 text-left'>
        Phone
        <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2 appearance-none" type="number" inputMode="numeric" pattern="[0-9]*" name="number" placeholder="Your Digits"/>
    </div>
    <div className='my-6 text-left'>
        Message
        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Describe Your Problem*'></textarea>
    </div>
    <button className='text-white px-8 py-2 rounded' style={{ backgroundColor: '#fc9908'}}>{result ? result : "Send Message"}</button>
</motion.form>



    </div>
  )
}

export default Contact
