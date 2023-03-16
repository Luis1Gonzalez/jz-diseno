import React, { useState } from 'react'
import { SlPhone } from 'react-icons/sl'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { RiMenuAddFill } from 'react-icons/ri'
import logo from '../assets/logoZacaro.png'

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
        <div className='mb-2 '>

            <div className='h-[40px] flex justify-evenly text-stone-200 md:hidden bg-zinc-900 relative z-20'>
                <div className='flex items-center justify-evenly'>
                    <p className='mx-1'><SlPhone /></p>
                    <p className='mx-1 text-xs'>991165341</p>
                </div>
                <div className='flex items-center'>
                    <p className='mx-1'><MdOutlineMarkEmailRead /></p>
                    <p className='mx-1 text-xs'>gueva@gmail.com</p>
                </div>
            </div>

            <div className='relative z-30 bg-white'>
                <div className=''>
                    <div className='flex items-center justify-around pt-4 pb-4'>
                        <div className='w-[25%] flex justify-center mx-2'>
                            <img className='h-[70px]' src={logo} alt="logo" />
                        </div>

                        <div className='ml-2 w-[50%] flex flex-col items-center'>
                            <h2 className='text-2xl flex tracking-widest'>Diseños <span className='flex justify-center rounded-full bg-sky-400 w-8 h-8 mx-2 text-xl text-right font-bold'>&</span></h2>
                            <h1 className='font-black text-3xl tracking-widest'> Muebles</h1>
                        </div>

                        <div className='w-[25%] p-4 flex justify-center mx-2 text-3xl cursor' onClick={() => updateBurgerMenu()}>
                            <RiMenuAddFill />
                        </div>

                    </div>

                    <div className=''>
                        <ul className='flex w-100 justify-evenly items-center italic text-sky-400'>
                            <li className='text-sm'>Innovación</li>
                            <li>-</li>
                            <li className='text-sm'>Calidad</li>
                            <li>-</li>
                            <li className='text-sm'>Diseño para ti</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`w-[100%] text-xs text-gray-400 ${menu} z-10 menu-animation`}>
                <p className=' py-2 px-10 hover:text-gray-800 font-bold hover:text-lg tracking-widest'>Inicio</p>
                <p className='border-t border-gray-400 py-2 px-10 hover:text-gray-800 font-bold hover:text-lg tracking-widest'>Servicios</p>
                <p className='border-t border-gray-400 py-2 px-10 hover:text-gray-800 font-bold hover:text-lg tracking-widest'>Nuestros Proyectos</p>
                <p className='border-t border-gray-400 py-2 px-10 hover:text-gray-800 font-bold hover:text-lg tracking-widest'>Opiniones de Clientes</p>
                <p className='border-t border-gray-400 py-2 px-10 hover:text-gray-800 font-bold hover:text-lg tracking-widest'>Contacto</p>
            </div>

        </div>
    )
}
