import z13 from '../assets/z13.jpg'
import z8 from '../assets/z8.jpg'
import z22 from '../assets/z22.jpg'
import z11 from '../assets/z11.jpg'

export default function Presentation() {
    return (
        <div className="my-7 px-4">

            <div className='mb-8'>
                <h2 className="text-center text-xl my-3">Empresa de reformas en Trujillo</h2>

                <p className="text-justify text-sm font-light">Diseñamos y ejecutamos reformas integrales de viviendas y apartamentos en Trujillo. Construcción de edificios para oficinas e instalaciones industriales, así como urbanizaciones y viviendas unifamiliares. Confía en un equipo de profesionales cualificados y eficaces. Cumplimos plazos y nos adaptamos al presupuesto con la máxima garantía.</p>
            </div>

            <div>
                <h2 className="text-center text-xl my-4">Nuestro Trabajo</h2>

<div className='border pb-4 mb-3 rounded-lg shadow-lg shadow-indigo-500/40'>
    <img className='h-[100%] rounded-t-lg' src={z13} alt="imagen de reforma de cocina" />
    <p className='px-3 pt-3 '>Reforma de Cocinas</p>
</div>

<div className='border pb-4 mb-3 rounded-lg shadow-lg shadow-indigo-500/40'>
    <img className='h-[100%] rounded-t-lg' src={z8} alt="imagen de instalación de parquet" />
    <p className='px-3 pt-3'>Instalación de Parquet</p>
</div>

<div className='border pb-4 mb-3 rounded-lg shadow-lg shadow-indigo-500/40'>
    <img className='h-[100%] rounded-t-lg' src={z22} alt="imagen de reforma de baños" />
    <p className='px-3 pt-3 '>Reforma de Baños</p>
</div>

<div className='border pb-4 mb-3 rounded-lg shadow-lg shadow-indigo-500/40'>
    <img className='h-[100%] rounded-t-lg' src={z11} alt="imagen de Fabricacón de muebles a medida" />
    <p className='px-3 pt-3 '>Fabricacón de muebles a medida</p>
</div>

            </div>


















        </div>

    )
}
