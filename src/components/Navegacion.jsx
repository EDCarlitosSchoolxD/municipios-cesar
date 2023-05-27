import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom';
export const Navegacion = () => {
    const [isOpen, setIsOpen] = useState(false);


    function handleClick(){
        setIsOpen(!isOpen);
    }

  return (
    <>
        <nav className='text-white bg-gradient-to-r from-pink-500 from-0% via-purple-400 via-50% to-sky-400 to-100%   w-full flex justify-between lg:justify-around items-center py-5 px-10'>

            <h1 className=''>LOGO</h1>

            <div >
                <GiHamburgerMenu onClick={handleClick} className=' lg:hidden'/>
                <ul className='hidden lg:flex justify-evenly gap-4'>
                        <li className='px-5'><Link to="/" className='block'>Home</Link></li>
                        <li className='px-5'><Link to="/" className='block'>Municipios</Link></li>
                        <li className='px-5'><Link to="/" className='block'>Contacto</Link></li>
                        <li className='px-5'><Link to="/" className='block'>Sobre nosotros</Link></li>
                </ul>
            </div>

        </nav>

        {
                isOpen?
                <div className='bg-zinc-500 text-white text-lg  lg:hidden'>
                    <ul className='flex flex-col gap-2'>
                        <li className='px-5 py-2 hover:bg-zinc-400'><Link to="/" className='block'>Home</Link></li>
                        <li className='px-5 py-2 hover:bg-zinc-400'><Link to="/" className='block'>Municipios</Link></li>
                        <li className='px-5 py-2 hover:bg-zinc-400'><Link to="/" className='block'>Contacto</Link></li>
                        <li className='px-5 py-2 hover:bg-zinc-400'><Link to="/" className='block'>Sobre nosotros</Link></li>
                    </ul>
                </div>
                :""
            }




    </>
        
    )
}
