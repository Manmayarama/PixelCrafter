import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "framer-motion"
import { AppContext } from '../context/AppContext'

const Result = () => {

    const [image,setImage]=useState(assets.sample_img_5) //state variable for downloading image.
    const [isImageLoaded,setIsImageLoaded]=useState(false)//state variable to check whether image loaded or not.
    const [loading,setLoading]=useState(false)//state variable for dispalying loadindg while image being loaded.
    const [input,setInput]=useState('')//state variable to store input data.

    const {generateImage}=useContext(AppContext)
    
    //Function to handle submit button
    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        setLoading(true)

        if(input){
            const image=await generateImage(input)
            if(image){
                console.log("Generated Image:")
                setIsImageLoaded(true)
                setImage(image)
            }
        }
        setLoading(false)
    } 

  return (
    <motion.form className='flex flex-col min-h-[90vh] justify-center items-center' onSubmit={onSubmitHandler} initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
    <div>
        {/*this div for image container and loading animation */}
        <div className='relative'>
            <img src={image} alt=""  className='max-w-sm rounded'/>
            <span className={`absolute bottom-0 lleft-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}/>
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading....</p>
    </div>

    {
    !isImageLoaded &&
    <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
        {/*this div for input and generate button */}
        <input type="text" placeholder='Outline your visual idea' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' onChange={e=>setInput(e.target.value)} value={input}/>
        <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
    </div>
    }


    {
    isImageLoaded &&
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
        {/*this div for regenerate and download button */}
        <p className='bg-primary  text-black px-8 py-3 rounded-full cursor-pointer' onClick={()=>{setIsImageLoaded(false)}}>Regenerate</p>
        <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
    </div>
    }
    </motion.form>
  )
}

export default Result