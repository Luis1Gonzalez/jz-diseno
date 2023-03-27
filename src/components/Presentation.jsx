import { offer } from '../data/objeto'

export default function Presentation() {
    return (
        <div className="mt-7 px-4 lg:w-[100%]">

            <div className='mb-8'>
                <h2 className="text-center text-xl my-3">Empresa de reformas en Arequipa</h2>

                <p className="text-justify text-sm font-light">Somos una empresa dedicada a ofrecer servicios de diseño de interiores y construcción.</p><br />
                <p className="text-justify text-sm font-light">Te brindamos acabados de primera, buen servico y puntualidad.</p>
            </div>

            <div className='mb-20'>
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

            

        </div>

    )
}
