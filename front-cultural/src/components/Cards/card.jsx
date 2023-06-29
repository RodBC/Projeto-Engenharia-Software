import { useState } from "react";
import "./style.css";
import reactLogo from '../../assets/rec_antigo.jpg'
import montanha from '../../assets/fotoCool.jpeg'

export const Card = () => {
    const [count, setCount] = useState(0);

    return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
        
      <h1>Apoie uma iniciativa em:</h1>

      <div className="cities">
        <button onClick={() => setCount(count+1)}><a>{count}</a></button>
        <button onClick={() => null}><a>Boa Viagem</a></button>
        <button onClick={() => null}><a>Ilha do Leite</a></button>
        <button onClick={() => null}><a>Joana Bezerra</a></button>
        <button onClick={() => null}><a>Tancredo Neves</a></button>
        <button onClick={() => null}><a>Madalena</a></button>
      </div>

      <div className="card-space">
        <div className='card'>

          <div className='imagem'>
            <img src={montanha} alt="" />
          </div>
          <div className='card-content'>
            <h2>Iniciativa</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsum, aut impedit nisi facere nesciunt fugiat at ipsam molestiae velit exercitationem porro, nulla quae repellendus quis! Id unde ipsa voluptate?</p>
            <div className='button'>
              <a href="https://www.youtube.com/watch?v=HHOn8u-c2wk&list=LL&index=12&t=593s" id="Texto_Do_Butão">Saiba amais</a>
            </div>
          </div>
          
        </div>
      </div>

    </>
)
}