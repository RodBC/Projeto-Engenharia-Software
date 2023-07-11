import { useState } from "react";
import "./style.css";
import montanha from '../../assets/fotoCool.jpeg'
// import heart from '../../assets/heart.png'
import share from '../../assets/share.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export const Card = () => {

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
            <h2>Iniciativa</h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsum, aut impedit nisi facere nesciunt fugiat at ipsam molestiae velit exercitationem porro, nulla quae repellendus quis! Id unde ipsa voluptate?</p>

            <div className='buttons'>
              <a href="https://www.youtube.com/watch?v=HHOn8u-c2wk&list=LL&index=12&t=593s" id="Texto_Do_Butão">Saiba amais</a>
              <FontAwesomeIcon icon={faHeart} className="heart_button"  color={curtida? 'red':'grey'} onClick={()=>muda_curtida()}/>
              <img src={share} id="share_button"/>
            </div>
          </div>
        </div>
      </div>

    </>
)
}