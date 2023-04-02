import React from 'react'
import {opinions} from '../data/objeto'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'

export default function Clients() {

  return (
    <div className='px-4 lg:w-[60%] my-4'>
        <h2 className='text-red-800 text-xl lg:text-3xl tracking-wider'>Lo que opinan nuestos Clientes</h2>

        <p className='my-4 lg:text-xl tracking-wider text-justify'>Nuestra mejor carta de presentación es cumplir con nuestros clientes en calidad y tiempo, es por esto que nos esforzamos en cumplir con sus espectativas y que recomienden nuestros servicios.</p>

<div className=''>
    
    
{opinions.map(opinion => (
    <div className='my-3 bg-stone-200 p-3 rounded-xl lg:flex lg:justify-evenly items-center' key={opinion.id}>        
<p className='text-justify lg:w-[65%] lg:order-2'>{opinion.contribution}</p>


<div className='flex flex-col flex-wrap items-center lg:w-[30%] lg:order-1'>
        <img className=' rounded-full w-[70px] h-[70px] my-3 ' src={opinion.image} alt='avatar del cliente' />
        
<div className='text-yellow-600'>{
    <span className='flex'>
    <BsStarFill className='mx-1'/>
    <BsStarFill className='mx-1'/>
    <BsStarFill className='mx-1'/>
    <BsStarFill className='mx-1'/>
    <BsStarFill/>
    </span>
    }</div>
        <p className='font-bold'>{opinion.name}</p>
        <p className='italic'>{opinion.date}</p>
    </div>
    </div>
))}

    {/* <img src={} alt='avatar del cliente' /> */}
</div>

    </div>
  )
}
