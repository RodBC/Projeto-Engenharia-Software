// import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import "./contactStyle.css"
import {Navbar} from "../Navbar/navbar.tsx"
import {Footer} from "../Footer/Footer.tsx"
import { ContactCard,CardImg,CardBody,TitleSpace,Contacts,MemberInfo,Main} from "./styles.tsx"

import arthur from '../../assets/arthur_careca2.png'
import rodrigo from '../../assets/rodrigo.jpg'
import ian from '../../assets/ian.jpg'
import lucas from '../../assets/lc.jpg'
import matheus from '../../assets/matheus.jpg'
// import facebok_icon from   "../../assets/facebook_1384085.png"
import instagram_icon from "../../assets/instagram_1384031.png"
import email_icon from "../../assets/email_747314.png"

export const ContactPage = () =>{
    return (
    <>
    <Navbar/>
    <TitleSpace>
    <h1 className="title">Desenvolvedores</h1>
    <div className="title_underline" style={{'width': '50em','height': '0.16rem','background-color': 'black'}}></div>
    </TitleSpace>

    <Main>

        <ContactCard>
            <CardImg src={arthur}></CardImg>
            <CardBody>

                <MemberInfo>
                <h5 className="card-title">Arthur Careca</h5>
                <p className="card-text">acms@cin.ufpe.br</p>
                </MemberInfo>

                <Contacts>
                <a href="https://www.instagram.com/artconeg/" target="_blank"><img src={instagram_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>
                <a href="mailto:acms@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>    
                </Contacts>
            </CardBody>
        </ContactCard>


        <ContactCard>
            <CardImg src={ian}></CardImg>
            <CardBody>
                <MemberInfo>
                    <h5 className="card-title">Ian</h5>
                    <p className="card-text" style={{'display':'inline-block'}}>ifsa@cin.ufpe.br</p>
                </MemberInfo>
                
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <Contacts>
                <a href="https://www.instagram.com/ian.felip3/" target="_blanck"><img src={instagram_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>
                <a href="mailto:ifsa@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>
                </Contacts>
            </CardBody>
        </ContactCard>

        <ContactCard>
            <CardImg src={lucas}></CardImg>
            <CardBody>
                <MemberInfo>
                <h5 className="card-title">Lucas</h5>
                <p className="card-text">lcmc@cin.ufpe.br</p>
                </MemberInfo>

                <Contacts>
                <a href="https://www.instagram.com/lcmc.exe/" target="_blanck"><img src={instagram_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>
                <a href="mailto:lcmc@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>
                </Contacts>

            </CardBody>
        </ContactCard>

        <ContactCard>
            <CardImg src={matheus}/>
            <CardBody>
                <MemberInfo>
                <h5 className="card-title">Matheus</h5>
                <p className="card-text">mfsm@cin.ufpe.br</p>
                </MemberInfo>

                <Contacts>
                <a href="https://www.instagram.com/m4theus_fillipe/" target="_blanck"><img src={instagram_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>
                <a href="mailto:mfsm@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>
                </Contacts>
            </CardBody>
        </ContactCard>

        <ContactCard>
            <CardImg src={rodrigo}/>
            <CardBody>
                <MemberInfo>
                <h5 className="card-title">Rodrigo</h5>
                <p className="card-text">rcbc6@cin.ufpe.br</p>
                </MemberInfo>

                <Contacts>
                <a href="https://www.instagram.com/decastro.rb/" target="_blanck"><img src={instagram_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>
                <a href="mailto:rcbc6@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" style={{'width': '1.6em','height': '1.6em'}}/></a>
                </Contacts>

            </CardBody>
        </ContactCard>
        
    </Main>
    <Footer/>
    </>
    )
}