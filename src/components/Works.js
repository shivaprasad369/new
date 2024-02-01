import React from 'react'
import logo from './home.jpg'
export default function Works() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-center gap-1'>
        <div>
            <h5 className='font-bold text-sm'> web development</h5>
            <p className='font-bold text-[2rem]'>WORKS</p>
        </div>
        <div className='flex gap-2 py-2 max-[386px]:flex-col max-[386px]:w-full '>
            <button className='border-2 px-3 py-1 border-black max-[386px]:w-[100%]'>demo</button>
            <button className='border-2 px-3 py-1 border-black max-[386px]:w-[100%] '>demo</button>
            <button className='border-2 px-3 py-1 border-black max-[386px]:w-[100%] '>demo</button>
            <button className='border-2 px-3 py-1 border-black max-[386px]:w-[100%] '>demo</button>
            <button className='border-2 px-3 py-1 border-black max-[386px]:w-[100%] '>demo</button>
        </div>
      </div>
      <div className=''>
        <div className=' grid grid-cols-3 grid-rows-3 gap-3 max-md:grid-cols-1 max-md:w-full'>
            <img src={logo} alt='image' width={250} height={100} className='max-md:w-full '/>
            <img src={logo} alt='image' width={250} height={100} className='max-md:w-full '/>
            <img src={logo} alt='image'width={250} height={100} className='max-md:w-full '/>
            <img src={logo} alt='image'width={250} height={100} className='max-md:w-full '/>
            <img src={logo} alt='image'width={250} height={100} className='max-md:w-full '/>
            <img src={logo} alt='image'width={250} height={100} className='max-md:w-full '/>
            <img src={logo} alt='image' width={250} height={100} className='max-md:w-full '/>
            <img src={logo} alt='image' width={250} height={100} className='max-md:w-full '/>
            <img src={logo} alt='image' width={250} height={100} className='max-md:w-full '/>

        </div>
        <div className='text-center mt-2'>
            <button className='bg-black text-white px-3 py-1'>Submit</button>
        </div>
      </div>
    </div>
  )
}
