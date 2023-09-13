import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Locations.css'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components'


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
        <h3 style={{width: '100%', textAlign: 'center'}}>Bairros</h3>
        <Slider {...settings} >
          <div> 
            <p  style={{textAlign: 'center'}}>Hermano</p>
          </div>
          <div>
            <p>Varzea</p>
          </div>
          <div>
            <p>Ilha do Tiro</p>
          </div>
          <div>
            <p>Cabo de santo Agostinho</p>
          </div>
          <div>
            <p>Centro de Informática</p>
          </div>
          <div>
            <p>UFPE</p>
          </div>
        </Slider>
      </div>
    );
};

