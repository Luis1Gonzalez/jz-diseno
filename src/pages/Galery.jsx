import React from 'react'
import {galeries} from '../data/objeto'

export default function Galery() {

  return (
    <div className='px-4 lg:w-[60%] my-4'>
      <h2 className='text-red-800 text-xl lg:text-3xl tracking-wider'>Galería</h2>

      <p className='my-3 lg:text-xl tracking-wider text-justify'>En nuestra galeria de fotos te mostramos imagenes de lo que podemos hacer, siempre haciendo uso de herramientas y materiales de primera calidad.</p>

<div className='flex flex-wrap justify-evenly'>
{galeries.map(galerie => (
    <div className='flex flex-wrap justify-center items-center my-3 bg-stone-200 p-3 rounded-2xl w-[45%] hover:w-[100%]' key={galerie.id}>
        {<img className='object-cover w-[100%] drop-shadow-md rounded-br-xl h-[100px] lg:h-[200px] hover:h-[200px] hover:lg:h-[400px]' src={galerie.image} alt='imagen de la galería' />}
    </div>
))}
    </div>



    </div>
  )
}
