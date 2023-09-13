import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Locations.css'


export const Locations = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    return (
      <div  style={{ width: '80%', margin:'auto', marginBottom: '100px', color: 'black'}} className='Slider'>
        <h3 style={{width: '100%', textAlign: 'center', marginTop: '30px'}}>Bairros</h3>
        <Slider {...settings} >
          <div> 
            <p  style={{textAlign: 'center'}}>Madalena</p>
          </div>
          <div>
            <p>Varzea</p>
          </div>
          <div>
            <p>Torre</p>
          </div>
          <div>
            <p>Ibura</p>
          </div>
          <div>
            <p>Boa viagem</p>
          </div>
          <div>
            <p>Curado</p>
          </div>
        </Slider>
      </div>
    );
};

