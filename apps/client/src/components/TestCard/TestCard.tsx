import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import montanha from '../../assets/fotoCool.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'




// --------------------------------------------------------

interface CardData {
  iniciativa: string;
  descricao: string;
}

const cardsData: CardData[] = [
  {
    iniciativa: "Cabolcos de nazaré da mata",
    descricao: "Nazaré da Mata",
  },
  {
    iniciativa: "Curado saudável",
    descricao: "Curado",
  },
  {
    iniciativa: "UFPE LGBT",
    descricao: "Várzea",
  },
  {
    iniciativa: "Chassina amanhã",
    descricao: "Ilha do Tiro",
  },
];

// --------------------------------------------------------

export const TestCard = () => {
  return (
    <>
      {cardsData.map((data, index) => (
        <CardItem key={index} data={data} />
      ))}
    </>
  );
};

interface CardItemProps {
  data: CardData;
}

const CardItem: React.FC<CardItemProps> = ({ data }) => {
  const [curtida, setCurtida] = useState(false);

  const muda_curtida = () => {
    setCurtida(!curtida);
  };

  return (

        // style={{ width: '100%'}}
        <Card style={{ width: '100%', height:'100%'}}>
          <Card.Img variant="top" src={montanha} />
          <Card.Body>
            <Card.Title>{data.iniciativa}</Card.Title>
            <Card.Text>
              {data.descricao}
            </Card.Text>
            <Button variant="primary">Saiba Mais</Button>
            <FontAwesomeIcon 
              icon={faHeart} 
              className="heart_button" 
              color={curtida ? 'red' : 'grey'} 
              onClick={muda_curtida}
              style={{paddingLeft: '150px' , height: '25px'}}  
            />
          </Card.Body>
        </Card>
  );
};

