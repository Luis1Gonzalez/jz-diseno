import j1 from '../assets/j1.png'
import j2 from '../assets/j2.png'
import j3 from '../assets/j3.png'
import j4 from '../assets/j4.png'
import {RiSlideshowLine} from 'react-icons/ri'
import {GiPencilRuler} from 'react-icons/gi'
import {FaCalendarAlt} from 'react-icons/fa'
import {FaRegHandshake} from 'react-icons/fa'

export default function Presentation() {
    return (
        <div className="my-7 px-4">

            <div className='mb-8'>
                <h2 className="text-center text-xl my-3">Empresa de reformas en Trujillo</h2>

                <p className="text-justify text-sm font-light">Diseñamos y ejecutamos reformas integrales de viviendas y apartamentos en Trujillo. Construcción de edificios para oficinas e instalaciones industriales, así como urbanizaciones y viviendas unifamiliares. Confía en un equipo de profesionales cualificados y eficaces. Cumplimos plazos y nos adaptamos al presupuesto con la máxima garantía.</p>
            </div>

            <div className='mb-20'>
                <h2 className="text-center text-xl my-4">Nuestro Trabajo</h2>

                <div className='h-[320px] pb-14 mb-3 rounded-lg border text-sm shadow-lg'>
                    <img className='h-[100%] w-[100%] rounded-t-lg' src={j1} alt="imagen de reforma de cocina" />
                    <p className='px-3 pt-3 '>Reforma de Cocinas</p>
                </div>

                <div className='h-[320px] pb-14 mb-3 rounded-lg border text-sm shadow-lg'>
                    <img className='h-[100%] w-[100%] rounded-t-lg' src={j2} alt="imagen de instalación de parquet" />
                    <p className='px-3 pt-3'>Instalación de Parquet</p>
                </div>

                <div className='h-[320px] pb-4 mb-3 rounded-lg border text-sm shadow-lg'>
                    <img className='h-[90%] w-[100%] rounded-t-lg' src={j3} alt="imagen de reforma de baños" />
                    <p className='px-3 pt-3 '>Reforma de Baños</p>
                </div>

                <div className='h-[320px] pb-4 mb-3 rounded-lg border text-sm shadow-lg'>
                    <img className='h-[90%] w-[100%] rounded-t-lg' src={j4} alt="imagen de Fabricacón de muebles a medida" />
                    <p className='px-3 pt-3 '>Fabricacón de muebles a medida</p>
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
