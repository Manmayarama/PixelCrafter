import React from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "framer-motion"

const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28' initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into Visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            {/*Left side of description */}
            <img src={assets.sample_img_4} className='w-80 xl:w-96 rounded-lg' alt="" />
            <div>
                {/*Right side of description */}
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>PixelCrafter is an AI-powered tool that transforms text descriptions into images. You simply provide a text prompt, and the AI generates a visual representation based on your description1. It's great for creating unique visuals for content, design projects, or just for fun!</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description