import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMailUnread } from 'react-icons/io'
import valoraciones from '../assets/valoraciones.gif'
import { Link } from "react-router-dom"


export default function LateralBar() {
  return (
    <div className='hidden lg:flex lg:flex-col h-vh w-[30%] items-center'>

      <div className='bg-white mt-4 mb-8'>
      <p className=' py-2 px-10 hover:text-red-800 font-bold lg:text-lg hover:text-lg tracking-widest'><Link to='/'>Inicio</Link></p>
                <p className='border-t lg:border-none border-gray-400 py-2 px-10 hover:text-red-800 font-bold lg:text-lg hover:text-lg tracking-widest'><Link to='/servicios'>Servicios</Link></p>
        <p className='border-t lg:border-none border-gray-400 py-2 px-10 hover:text-red-800 font-bold lg:text-lg hover:text-lg tracking-widest'><Link to='galeria'>Galería</Link></p>
        <p className='border-t lg:border-none border-gray-400 py-2 px-10 hover:text-red-800 font-bold lg:text-lg hover:text-lg tracking-widest'><Link to='testimnios-de-los-clientes'>Opinión de Nuestro Clientes</Link></p>
      </div>

      <div className=' mb-8 flex flex-col pl-5 '>
        <h2 className='mb-2 text-red-800 uppercase text-xl'>Información de Contacto</h2>

        <p className='flex text-md my-2 '><span className='mx-3 text-lg text-red-800'><FaMapMarkedAlt /></span><a href="https://goo.gl/maps/6m4XhJ5r3EGBHTsd9" target="_blank">Perú, Arequipa, Camaná Cercada Av. Camaná 1456</a></p>
        <p className='flex text-md my-2'><span className='mx-3 text-lg text-red-800'><BsFillTelephoneFill /></span><a href="tel:+51969516619">Telefono: 969516619</a></p>
        <p className='flex text-md my-2'><span className='mx-3 text-lg text-red-800'><BsFillTelephoneFill /></span><a href="tel:+51991165341">Telefono: 991165341</a></p>
        <p className='flex text-md my-2'><span className='mx-3 text-lg text-red-800'><IoMdMailUnread /></span><a href="mailto:zacariajavier020@gmail.com">Email: zacariajavier020@gmail.com</a></p>
      </div>

      <div className=' mb-8 flex flex-col w-[100%]'>
        <h2 className='my-4 ml-5 lg:text-red-800 uppercase text-xl'>Nuestros Clientes</h2>

        <div className='w-[100%] flex justify-center mb-4 px-4'>
          <img src={valoraciones} alt="gif de valoraciones" />
        </div>

        <div className='flex flex-col px-4'>
        <p className='text-justify text-lg mb-3'>La opinión de <b>Nuestos Clientes</b> es nuestra mejor carta de presentación, por ello le garantizamos su satisfacción.</p>
        <p className='text-red-700 hover:text-red-900 italic text-md hover:text-lg pointer' >Aqui puedes ver sus valoraciones.</p>
        </div>
        
      </div>

    </div>
  )
}




