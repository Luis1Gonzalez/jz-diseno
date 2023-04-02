import React from 'react'
import {services} from '../data/objeto'

function Services() {
  return (
    <div className='px-4 lg:w-[60%] my-4'>
      <h2 className='text-red-800 text-xl lg:text-3xl tracking-wider'>Nuestros Servicios</h2>

      <p className='my-3 lg:text-xl tracking-wider text-justify'>Somos una empresa dedicada a ofrecer servicos de diseño de interiores y construccion.</p>

<p className='my-4 lg:text-xl tracking-wider text-justify'>Nos especializamos en:</p>

<div className='my-8'>
  {services.map(service => (
    <div className='bg-stone-200 lg:shadow-lg lg:flex lg:items-center p-2 justify-between rounded-xl my-3' key={service.id}>
      <img className='lg:w-[50%] rounded-xl order-2 lg:h-[300px]' src={service.image} alt="mueble de melamine" />
        <p className='lg:w-[50%] text-sm lg:text-2xl text-center py-3 font-medium lg:font-bold order-1'>{service.description}</p>
    </div>
  ))}
</div>

    </div>
  )
}

export default Services