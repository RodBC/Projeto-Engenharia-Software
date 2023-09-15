import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Locations.css';

interface LocationsProps {
  bairros: string[];
}

export const Locations: React.FC<LocationsProps> = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const bairros = ['Madalena', 'Varzea', 'Torre', 'Ibura', 'Boa viagem', 'Curado'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const toggleItem = (bairro: string) => {
    if (selectedItems.includes(bairro)) {
      setSelectedItems(selectedItems.filter((item) => item !== bairro));
    } else {
      setSelectedItems([...selectedItems, bairro]);
    }
  };

  console.log(selectedItems);

  return (
    <div style={{ width: '80%', margin: 'auto', marginBottom: '100px', color: 'black' }} className="Slider">
      <h3 style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>Bairros</h3>
      <Slider {...settings}>
        {bairros.map((bairro, index) => (
          <div key={index} onClick={() => toggleItem(bairro)} className={`bairro ${selectedItems.includes(bairro) ? 'selected' : ''}`}>
            <p style={{ textAlign: 'center' }}>{bairro}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

