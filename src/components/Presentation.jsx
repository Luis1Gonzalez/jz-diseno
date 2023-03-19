import j1 from '../assets/j1.png'
import j2 from '../assets/j2.png'
import j3 from '../assets/j3.png'
import j4 from '../assets/j4.png'
import { RiSlideshowLine } from 'react-icons/ri'
import { GiPencilRuler } from 'react-icons/gi'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaRegHandshake } from 'react-icons/fa'
import { offer } from '../data/objeto'

export default function Presentation() {
    console.log(offer)
    return (
        <div className="my-7 px-4">

            <div className='mb-8'>
                <h2 className="text-center text-xl my-3">Empresa de reformas en Trujillo</h2>

                <p className="text-justify text-sm font-light">Diseñamos y ejecutamos reformas integrales de viviendas y apartamentos en Trujillo. Construcción de edificios para oficinas e instalaciones industriales, así como urbanizaciones y viviendas unifamiliares. Confía en un equipo de profesionales cualificados y eficaces. Cumplimos plazos y nos adaptamos al presupuesto con la máxima garantía.</p>
            </div>

            <div className='mb-20'>
                <h2 className="text-center text-xl my-4">Nuestro Trabajo</h2>

                <div className="my-7">
                    {offer.map(of => (
                        <div key={of.id} className='h-[320px] pb-14 mb-3 rounded-lg border text-sm shadow-lg'>
                            <img className='h-[95%] w-[100%] rounded-t-lg' src={of.image} alt="imagen de reforma de cocina" />
                            <p className='px-3 py-3 text-center'>{of.description}</p>
                        </div>
                    ))}
                </div>

            </div>

































            <div className='flex flex-wrap justify-evenly'>

                <div className='w-[40%] mb-5 flex flex-col items-center'>
                    <span className='text-3xl mb-2 text-red-900'><RiSlideshowLine /></span>
                    <p className='text-xs text-center font-normal text-gray-500'>Asesoramiento profesional</p>
                </div>

                <div className='w-[40%] mb-5 flex flex-col items-center'>
                    <span className='text-3xl mb-2 text-red-900'><GiPencilRuler /></span>
                    <p className='text-xs text-center font-normal text-gray-500'>Diseño personalizado</p>
                </div>

                <div className='w-[40%] mb-5 flex flex-col items-center'>
                    <span className='text-3xl mb-2 text-red-900'><FaCalendarAlt /></span>
                    <p className='text-xs text-center font-normal text-gray-500'>Proyecto sin compromisos</p>
                </div>

                <div className='w-[40%] mb-5 flex flex-col items-center'>
                    <span className='text-3xl mb-2 text-red-900'><FaRegHandshake /></span>
                    <p className='text-xs text-center font-normal text-gray-500'>Máxima garantía y cumplimiento de plazos</p>
                </div>



            </div>















        </div>

    )
}
