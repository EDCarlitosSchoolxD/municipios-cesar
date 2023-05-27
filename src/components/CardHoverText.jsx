import React from 'react'
import { Link } from 'react-router-dom'
export const CardHoverText = ({src, name, discount, to}) => {
  return (
    <div className='mt-10 w-[400px] max-w-full  relative text-white' >
        
        <img
            className='w-full h-full' 
            src={src} 
            alt="Imagen del estado de :" />

        <div className='absolute hover:bg-pink-600 opacity-0 p-5 hover:opacity-100 duration-300 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
            <h3 className='text-lg'>{name}</h3>
            <p className='text-lg'>{discount} %</p>
            <Link className='text-lg' to={to} >Ver más</Link>
        </div>

    </div>
  )
}
