import img1 from '../assets/c1.png'
import img2 from '../assets/c2.png'
import img3 from '../assets/c3.png'
import img4 from '../assets/c4.png'
import img5 from '../assets/c5.png'
import img6 from '../assets/c6.png'


function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="Imagen de muestra 1" />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="Imagen de muestra 2" />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="Imagen de muestra 3" />
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="Imagen de muestra 4" />
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="Imagen de muestra 5" />
    </div>
    <div className="carousel-item">
      <img src={img6} className="d-block w-100" alt="Imagen de muestra 6" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Carousel;
