import React, {useState} from 'react'
import { SlPhone } from 'react-icons/sl'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { RiMenuAddFill } from 'react-icons/ri'
import logo from '../assets/logoZacaro.png'

export default function Head() {
    const [menu, setMenu] = useState('hidden')

const updateBurgerMenu = () => {
    if(menu === 'hidden'){
        setMenu('block')
    }else{
        setMenu('hidden')
    }
}

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

            <div className=''>
                <div className='flex items-center justify-around pt-4 pb-4'>
                    <div className='w-[25%] flex justify-center mx-2'>
                        <img className='h-[70px]' src={logo} alt="logo" />
                    </div>

                    <div className='ml-2 w-[50%] flex flex-col items-center'>
                        <h2 className='text-2xl flex tracking-widest'>Diseño <span className='flex justify-center rounded-full bg-sky-400 w-8 h-8 mx-2 text-xl text-right font-bold'>&</span></h2>
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

            <div className={`flex flex-col text-xs pt-4 text-gray-400 ${menu}`}>
                <p className='border py-2 px-10 hover:text-gray-800 hover:text-lg'>Inicio</p>
                <p className='border py-2 px-10 hover:text-gray-800 hover:text-lg'>Servicios</p>
                <p className='border py-2 px-10 hover:text-gray-800 hover:text-lg'>Nuestros Proyectos</p>
                <p className='border py-2 px-10 hover:text-gray-800 hover:text-lg'>Opiniones de Clientes</p>
                <p className='border py-2 px-10 hover:text-gray-800 hover:text-lg'>Contacto</p>
            </div>

        </div>
    )
}
