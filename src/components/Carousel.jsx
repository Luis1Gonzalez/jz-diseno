import imageGif from '../assets/imageGif.gif'


function Carousel() {
  return (

<div className='h-[400px] flex justify-center mt-4 bg-stone-100'>
<img className='h-[100%]' src={imageGif} alt='gif carrusel' />
</div>

);
}

export default Carousel;
