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
    iniciativa: "Volta pra mim Leticia",
    descricao: "estou sofrendo muito",
  },
  {
    iniciativa: "Cachorro chupetão",
    descricao: "Compre a chupeta para o dog",
  },
  {
    iniciativa: "Duelo na Rua do sol",
    descricao: "apenas armas brancas",
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
          <Card.Body style={{display: 'flex', alignItems: 'start', flexDirection: 'column'}}>
            <Card.Title>{data.iniciativa}</Card.Title>
            <Card.Text>
              {data.descricao}
            </Card.Text>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Button variant="primary">Saiba Mais</Button>
            <FontAwesomeIcon 
              icon={faHeart} 
              className="heart_button" 
              color={curtida ? 'red' : 'grey'} 
              onClick={muda_curtida}
              style={{ height: '25px', cursor: 'pointer'}}  
            />
            </div>
          </Card.Body>
        </Card>
  );
};

