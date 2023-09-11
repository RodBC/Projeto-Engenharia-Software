import React, { useState } from "react";
import "./style.css";
import montanha from '../../assets/fotoCool.jpeg'
import share from '../../assets/share.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface CardData {
  iniciativa: string;
  descricao: string;
}

const cardsData: CardData[] = [
  {
    iniciativa: "Cabolcos de nazaré da mata",
    descricao: "Ajude hermano pirão a disseminar o maracatu rural",
  },
  {
    iniciativa: "Curado saudável",
    descricao: "Ajude a curar o quejio",
  },
  {
    iniciativa: "UFPE LGBT",
    descricao: "Ajude a deixar o mundo mais gay, amanhã",
  },
  {
    iniciativa: "Chassina amanhã",
    descricao: "Local UFPE",
  },
];

export const Card = () => {
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
    <div className='card'>
      <div className='imagem'>
        <img src={montanha} alt="" />
      </div>
      <div className='card-content'>
        <h2>{data.iniciativa}</h2>
        <p>{data.descricao}</p>

        <div className='buttons'>
          <a href="https://www.youtube.com/watch?v=HHOn8u-c2wk&list=LL&index=12&t=593s"  id="Texto_Do_Butão">Saiba mais</a>
          <img src={share} id="share_button"/>
          <FontAwesomeIcon icon={faHeart} className="heart_button" color={curtida ? 'red' : 'grey'} onClick={muda_curtida} />
        </div>
      </div>
    </div>
  );
};
