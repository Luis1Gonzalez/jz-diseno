import img1 from '../assets/z21.jpg'
import img2 from '../assets/z2.jpg'
import img3 from '../assets/z18.jpg'
import img4 from '../assets/z4.jpg'
import img5 from '../assets/z5.jpg'
import img6 from '../assets/z20.jpg'


function Carousel() {
  return (
    <div className='w-[100%]'>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="esto" />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img6} className="d-block w-100" alt="..." />
    </div>
  </div>  
</div>
</div>
  );
}

export default Carousel;
