import { useState } from "react";
import "./style.css";
import montanha from '../../assets/fotoCool.jpeg'
// import heart from '../../assets/heart.png'
import share from '../../assets/share.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


type CardProps={
  name:string
  description:string
  link:string
}

export const Card = (props:CardProps) => {

    const [curtida, setCurtida] = useState(false);
    const muda_curtida = ()=>{
      setCurtida(!curtida)
    }
    return (
    <>
      <div className="card-space">
        <div className='card'>

          <div className='imagem'>
            <img src={montanha} alt="" />
          </div>

          <div className='card-content'>
            <h2>{props.name}</h2>

            <p>{props.description}</p>

            <div className='buttons'>
              <a href={props.link} id="Texto_Do_Butão">Saiba amais</a>
              <FontAwesomeIcon icon={faHeart} className="heart_button"  color={curtida? 'red':'grey'} onClick={()=>muda_curtida()}/>
              <img src={share} id="share_button"/>
            </div>
          </div>
        </div>
      </div>

    </>
)
}