import React from 'react'
import { SlPhone } from 'react-icons/sl'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import logo from '../assets/logoZacaro.png'

export default function Head() {
    return (
        <div className=''>

            <div className='h-[40px] flex justify-evenly text-stone-200 md:hidden bg-zinc-900'>
                <div className='flex items-center justify-evenly'>
                    <p className='mx-1'><SlPhone /></p>
                    <p className='mx-1 text-xs'>991165341</p>
                </div>
                <div className='flex items-center'>
                    <p className='mx-1'><MdOutlineMarkEmailRead /></p>
                    <p className='mx-1 text-xs'>gueva@gmail.com</p>
                </div>
            </div>

            <div className='h-[100px]'>
                <div className='flex items-center justify-around py-2'>
                    <div className='w-[25%] flex justify-center mx-2'>
                        <img className='h-[70px]' src={logo} alt="logo" />
                    </div>

                    <div className='ml-2 w-[50%]'>
                        <h2 className='text-xl flex tracking-widest'>Diseño <span className='border flex justify-center rounded-full bg-blue-500 w-8 h-8 mx-2'>&</span></h2>
                        <h1 className='font-black text-xl tracking-widest'> Muebles</h1>
                    </div>

                    <div className='w-[25%] bg-green-700 p-4 flex justify-center mx-2'>Menu</div>

                </div>

                <div className='pb-2 bg-yellow-500'>
                    <ul className='flex w-100 justify-evenly items-center'>
                        <li className='text-xs'>Innovación</li>
                        <li className='text-xs'>Calidad</li>
                        <li className='text-xs'>Diseño para ti</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
