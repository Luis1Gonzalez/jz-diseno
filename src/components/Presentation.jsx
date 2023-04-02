import { offer } from '../data/objeto'
import valoraciones from '../assets/valoraciones.gif'

export default function Presentation() {
    return (
        <div className="mt-7 px-4 lg:w-[100%]">

            <div className='mb-8'>
                <h2 className="text-center text-xl my-3">Empresa de reformas en Arequipa</h2>

                <p className="text-justify text-sm font-light">Somos una empresa dedicada a ofrecer servicios de diseño de interiores y construcción.</p><br />
                <p className="text-justify text-sm font-light">Te brindamos acabados de primera, buen servico y puntualidad.</p>
            </div>

            <div className='mb-8'>
                <h2 className="text-center text-xl my-4">Nuestro Trabajo</h2>

                <div className="my-7 flex flex-wrap justify-evenly">
                    {offer.map(of => (
                        <div key={of.id} className='h-[320px] w-[100%] pb-14 mb-3 rounded-lg border text-sm shadow-lg sm:w-[45%]'>
                            <img className='h-[95%] w-[100%] rounded-t-lg' src={of.image} alt="imagen de reforma de cocina" />
                            <p className='px-3 py-3 text-center'>{of.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className=' mb-8 flex flex-col w-[100%] lg:hidden'>
        <h2 className='my-4 lg:text-red-800 uppercase text-xl text-center lg:text-start'>Nuestros Clientes</h2>

        <div className='w-[100%] flex justify-center mb-4 px-4'>
          <img src={valoraciones} alt="gif de valoraciones" />
        </div>

        <div className='flex flex-col px-4'>
        <p className='text-justify text-sm mb-3'>La opinión de <b>Nuestos Clientes</b> es nuestra mejor carta de presentación, por ello le garantizamos su satisfacción.</p>
        <p className='text-red-700 hover:text-red-900 italic text-xs hover:text-lg pointer' >Aqui puedes ver sus valoraciones.</p>
        </div>
        
      </div>

            

        </div>

    )
}
