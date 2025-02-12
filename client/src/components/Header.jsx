import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const {user,setShowLogin}=useContext(AppContext)
    const navigate=useNavigate()

    const onClickHandler=()=>{
        if(user){
            navigate('/result')
        } else{
            setShowLogin(true)
        }
    }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500' initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.8}}>
            <p>Create stunning images instantly with the power of AI—just describe it.</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>
        <motion.h1 className='text-4xl max-w-[300px] sm:text-5xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text into incredible <span className='text-primary' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:2}}>images</span> with AI!</motion.h1>
        <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI.Turn your imagination into visual art in seconds-just type, and watch the magic happen.</p>
        <motion.button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full' whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8}, duration:1}} onClick={onClickHandler}>
            Generate Images
            <img className="h-6" src={assets.star_group} alt="" />
        </motion.button>

        <div className='flex flex-wrap justify-center mt-16 gap-3'>
            {Array(4).fill('').map((item,index)=>(
                <img  className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-20'  src={index % 4 === 0 ? assets.sample_img_1 : 
                    index % 4 === 1 ? assets.sample_img_2 : 
                    index % 4 === 2 ? assets.sample_img_3 : assets.sample_img_4} width={100} key={index} />
            ))}
        </div>
        <p className='mt-2 text-neutral-600'>Generated images from PixelCrafter</p>
    </motion.div>
  )
}

export default Header