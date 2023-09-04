import "./contactStyle.css"
import {Navbar} from "../Navbar/navbar.tsx"
import {Footer} from "../Footer/Footer.tsx"

import arthur from '../../assets/arthur_careca2.png'
import rodrigo from '../../assets/rodrigo.jpg'
import ian from '../../assets/ian.jpg'
import lucas from '../../assets/lc.jpg'
import matheus from '../../assets/matheus.jpg'
import facebok_icon from   "../../assets/facebook_1384085.png"
import instagram_icon from "../../assets/instagram_1384031.png"
import email_icon from "../../assets/email_747314.png"

// interface CardContact {
//     name:string;
//     contact:string
// }


// const cardsData: CardContact[] = [
//     {
//         name:'Arthur',
//         contact:'acmsp@cin.ufpe.br'
//     },
//     {
//         name:'Ian',
//         contact:'ifsa@cin.ufpe.br'
//     },
//     {
//         name:'Lucas',
//         contact:'lcmc@cin.ufpe.br'
//     },
//     {
//         name:'Matheus',
//         contact:'mfsm@cin.ufpe.br'
//     },
//     {
//         name:'Rodrigo',
//         contact:'rcb6@cin.ufpe.br'
//     },
// ]

export const ContactPage = () =>{
    return (
    <>
    <Navbar/>

    <div className="title_space">
        <h1 className="title">Desenvolvedores</h1>
        <div className="title_underline"></div>
    </div>

    <main>

    <div className="contact_card">
        <img src={arthur} className="card-img-top" alt="..."/>
        <div className="card-body">
            <div className="member_info">
                <h5 className="card-title">Arthur Careca</h5>
                <p className="card-text">acms@cin.ufpe.br</p>
            </div>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <div className="socials">
                <a href="https://www.instagram.com/ian.felip3/" target="_blanck"><img src={instagram_icon} alt="" className="faceIcon"/></a>
                <a href="mailto:acms@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" className="emailIcon"/></a>
            </div>
        </div>
    </div>

    <div className="contact_card">
        <img src={ian} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Ian</h5>
            <p className="card-text">ifsa@cin.ufpe.br</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <div className="socials">
                <a href="https://www.instagram.com/ian.felip3/" target="_blanck"><img src={instagram_icon} alt="" className="faceIcon"/></a>
                <a href="mailto:ifsa@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" className="emailIcon"/></a>
            </div>
        </div>
    </div>

    <div className="contact_card">
        <img src={lucas} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Lucas</h5>
            <p className="card-text">lcmc@cin.ufpe.br</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <div className="socials">
                <a href="https://www.instagram.com/ian.felip3/" target="_blanck"><img src={instagram_icon} alt="" className="faceIcon"/></a>
                <a href="mailto:lcmc@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" className="emailIcon"/></a>
            </div>
        </div>
    </div>

    <div className="contact_card">
        <img src={matheus} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Matheus</h5>
            <p className="card-text">mfsm@cin.ufpe.br</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <div className="socials">
                <a href="https://www.instagram.com/ian.felip3/" target="_blanck"><img src={instagram_icon} alt="" className="faceIcon"/></a>
                <a href="mailto:mfsm@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" className="emailIcon"/></a>
            </div>
        </div>
    </div>

    <div className="contact_card">
        <img src={rodrigo} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Rodrigo</h5>
            <p className="card-text">rcbc6@cin.ufpe.br</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <div className="socials">
                <a href="https://www.instagram.com/ian.felip3/" target="_blanck"><img src={instagram_icon} alt="" className="faceIcon"/></a>
                <a href="mailto:rcbc6@cin.ufpe.br" target="_blank"><img src={email_icon} alt="" className="emailIcon"/></a>
            </div>
        </div>
    </div>

    </main>
    <Footer/>
    </>
    )
}



