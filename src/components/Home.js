import React from 'react'
import classes from './Home.module.css'
export default function Home() {
  return (
    <div className='flex flex-col gap-3 justify-center items-center h-[40rem] pt-20 p-4 text-white'>
      <div className=' font-bold items-center justify-center'>
        <div className='text-sm text-center  '>this id demo project</div>
        <div className={`${classes.header} text-[3rem] md:max-md:text-2xl`}>
            <p >WE ARE <sapn className="text-green-500" >CHICAGO</sapn></p>
        </div>
        <button className='boredr-0 px-1 py-2 border-2 w-[5rem] text-center right-[6rem]'>Submit</button>
      </div>
    </div>
  )
}
