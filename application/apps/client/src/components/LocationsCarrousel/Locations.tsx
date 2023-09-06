import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Locations.css'

export const Locations = () => {


//------------------------------------------ configurações do Carousel:


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }; 

//------------------------------------------ array de valores para os elementos do carousel:
    interface locationdata{
        location: string;
    }

    let LocationsData: locationdata[] = [
      {location: 'Casa Forte'},
      {location: 'Na minha casa'},
      {location: 'Imbiribeira'},
      {location: 'Rua do Frio'},
      {location: 'Cabo de Santo Agostinho'},
      {location: 'Linha do Tiro'},
      {location: 'Casa Amarela'},
      {location: 'Paulista'},
      {location: 'Nazaré da Mata'},
      {location: 'Várzea'},
      {location: 'Curado'},
      {location: 'Boa Viagem'},
    ];

    return (
        <div className='sliders-container'>
            <Slider {...settings}>

                {LocationsData.map((data, index) => (
                    <div className='slides' key={index}>
                        <h3>{data.location}</h3>
                    </div>
                ))}

            </Slider>
        </div>
    );
};

