import React, { useState } from 'react'
import { SlPhone } from 'react-icons/sl'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { RiMenuAddFill } from 'react-icons/ri'
import logo from '../assets/logoZacaro.png'
import { Link } from "react-router-dom"

export default function Head() {
    const [menu, setMenu] = useState('menu-closed')

    const updateBurgerMenu = () => {
        if (menu === 'menu-closed') {
            setMenu('menu-show')
        } else {
            setMenu('menu-closed')
        }
    }

    return (
        <div className='exceptions lg:w-[100%] lg:sticky log:top-0 lg:mb-5 lg:shadow-2xl'>

            <div className='h-[40px] flex justify-evenly text-stone-200 md:hidden bg-zinc-900 relative z-20'>
                <div className='flex items-center justify-evenly'>
                    <p className='mx-1'><SlPhone /></p>
                    <p className='mx-1 text-xs'>991165341</p>
                </div>
                <div className='flex items-center'>
                    <p className='mx-1'><MdOutlineMarkEmailRead /></p>
                    <p className='mx-1 text-xs'>zacariajavier020@gmail.com</p>
                </div>
            </div>

            <div className='relative z-30 bg-white'>
                <div className=''>
                    <div className='flex items-center justify-around pt-4 pb-4'>
                        <div className='w-[25%] lg:w-[50%] lg:my-5 flex justify-center mx-2'>
                            <img className='h-[70px] lg:h-[150px]' src={logo} alt="logo" />
                        </div>

                        <div className='ml-2 w-[50%] lg:w-[100%] lg:my-2 flex flex-col items-center lg:items-start'>
                            <h2 className='text-2xl flex tracking-widest lg:text-6xl'>Diseños <span className='flex justify-center rounded-full bg-sky-400 w-8 h-8 mx-2 text-xl text-right font-bold'>&</span></h2>
                            <h1 className='font-black text-3xl lg:text-8xl'> Muebles</h1>
                        </div>

                        <div className='w-[25%] p-4 flex justify-center mx-2 text-3xl cursor lg:hidden' onClick={() => updateBurgerMenu()}>
                            <RiMenuAddFill />
                        </div>

                    </div>

                    <div className='mb-4'>
                        <ul className='flex w-100 justify-evenly items-center lg:text-5xl italic text-sky-400 mb-4'>
                            <li className='text-sm lg:text-2xl'>Innovación</li>
                            <li>-</li>
                            <li className='text-sm lg:text-2xl'>Calidad</li>
                            <li>-</li>
                            <li className='text-sm lg:text-2xl'>Diseño para ti</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`w-[100%] text-xs text-gray-600 ${menu} z-10 menu-animation opacity-90 lg:text-center lg:bg-white lg:mt-16 lg:mb-10`}>
                <p className=' py-2 px-10 hover:text-red-800 font-bold lg:text-lg hover:text-lg tracking-widest'><Link to='/'>Inicio</Link></p>
                <p className='border-t lg:border-none border-gray-400 py-2 px-10 hover:text-red-800 font-bold lg:text-lg hover:text-lg tracking-widest'><Link to='/servicios'>Servicios</Link></p>
                <p className='border-t lg:border-none border-gray-400 py-2 px-10 hover:text-red-800 font-bold lg:text-lg hover:text-lg tracking-widest'><Link to='galeria'>Galería</Link></p>
                <p className='border-t lg:border-none border-gray-400 py-2 px-10 hover:text-red-800 font-bold lg:text-lg hover:text-lg tracking-widest'><Link to='testimnios-de-los-clientes'>Opinión de Nuestro Clientes</Link></p>
                
            </div>

        </div>
    )
}
