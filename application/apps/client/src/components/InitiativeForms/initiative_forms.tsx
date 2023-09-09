import {Navbar} from '../Navbar/navbar.tsx'
import {Footer} from '../Footer/Footer.tsx'
import {Main,About,Socials,UserImg,Button} from './formStyles.tsx'
import ian from '../../assets/fotoCool.jpeg'


export const InitiativeForm = () =>{
    return(
        <>
            {/* <Navbar/> */}

            <Main>
                <div>
                    <UserImg src={ian}/>
                </div>
                
                <div>

                    <div style={{'display':'flex','flex-direction':'column','text-align':'start'}}>
                        
                        <p style={{'margin-bottom':'0px'}}>Fale mais sobre você :)</p>
                        <About className='form-control form-control-lg' placeholder="Sobre mim..."/>
                    
                    <div style={{'display':'flex','flex-direction':'column','text-align':'start'}}>
                        <p style={{'margin-bottom':'0.32em'}}>Redes Sociais</p>
                        <label htmlFor="">
                        <img src="" alt="" />
                        <Socials className='form-control' placeholder="Link..."/>
                        </label>

                        <label htmlFor="">
                        <Socials className='form-control' placeholder="Link..."/>
                        </label>

                        <label htmlFor="">
                        <Socials className='form-control' placeholder="Link..."/>
                        </label>
                    </div>

                    </div>

                    <Button className='btn btn-primary'>Prosseguir</Button>
                </div>
                {/* <img src={ian} alt="" style={{}} /> */}
                {/* <div>Bola</div> */}
                {/* <button type="button" class="btn btn-primary">Primary</button> */}
            </Main>

            <Footer/>
        </>
    );
}