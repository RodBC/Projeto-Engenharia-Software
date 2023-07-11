import { useState } from "react";
import "./style.css";
import montanha from '../../assets/fotoCool.jpeg'
// import heart from '../../assets/heart.png'
import share from '../../assets/share.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface CardProps {
    name: string;
    description: number;
    link: string;
}
export const Card = (dataArray: CardProps[]) => {

    const [curtida, setCurtida] = useState(false);
    const muda_curtida = ()=>{
      setCurtida(!curtida)
    }
    
    dataArray.map(data => {

      const {name, description, link} = data
      return (
      <>
        <div className="card-space">
          <div className='card'>

            <div className='imagem'>
              <img src={montanha} alt="" />
            </div>

            <div className='card-content'>
              <h2>{name}</h2>

              <p>{description}</p>

              <div className='buttons'>
                <a href={link} id="Texto_Do_Butão">Saiba amais</a>
                <FontAwesomeIcon icon={faHeart} className="heart_button"  color={curtida? 'red':'grey'} onClick={()=>muda_curtida()}/>
                <img src={share} id="share_button"/>
              </div>
            </div>
          </div>
        </div>

      </>
  )
})

}