import { FaMapMarkedAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMailUnread } from 'react-icons/io'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='p-4'>


            <div className='mt-2 mb-8'>
                <h2 className='mb-2 text-center text-red-800 uppercase text-xs'>Información de Contacto</h2>

                <p className='flex text-xs my-2'><span className='mx-3 text-lg text-red-800'><FaMapMarkedAlt /></span>Dirección del negocio...</p>
                <p className='flex text-xs my-2'><span className='mx-3 text-lg text-red-800'><BsFillTelephoneFill /></span>Teléfono: 991165341</p>
                <p className='flex text-xs my-2'><span className='mx-3 text-lg text-red-800'><IoMdMailUnread /></span>Email: gueva@gmail.com</p>
            </div>



            <div className='mt-2 mb-8'>
                <h2 className='mb-2 text-center text-red-800 uppercase text-xs'>Informate</h2>

                <p className='text-md my-1 text-center text-xs'>Nuestros proyectos</p>
                <p className='text-md my-1 text-center  text-xs'>Servicios</p>
                <p className='text-md my-1 text-center  text-xs'>Sobre nosotros</p>
            </div>

            <div className='mt-2 mb-8'>
                <h2 className='mb-2 text-center text-red-800 uppercase text-xs'>Nuestras Redes Sociales</h2>

                <div className='flex justify-center'>
                    <a className='bg-gray-300 mx-1 w-[35px] h-[35px] flex justify-center items-center text-2xl'><AiOutlineInstagram /></a>
                    <a className='bg-gray-300 mx-1 w-[35px] h-[35px] flex justify-center items-center text-md'><FaFacebookF /></a>
                </div>

            </div>

            <div className='text-xs text-center'>
                <p>Copyright 2023 JZ Diseños&Muebles | Todos los derechos reservados | Desarrollado por Luis1Gonzalez</p>
            </div>

<div className='text-xs text-center mt-14'>
    <a href="#">Aviso Legal | </a>
    <a href="#">Política de privacidad |</a>
    <a href="#"> Política de Cookies</a>
</div>


            <div></div>














        </div>
    )
}
