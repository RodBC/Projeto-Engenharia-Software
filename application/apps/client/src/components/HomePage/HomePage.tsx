import {Locations} from "../LocationsCarrousel/Locations"
import { Footer } from "../Footer/Footer.js"
import {NavBar} from "../Navbar/navbar.jsx"
import {TestCard} from "../TestCard/TestCard"
import { AuthContext } from "../../contexts/auth/AuthContext.js"
import { useContext } from "react"
import './HomePage.css'

export const HomePage = () => {
    const auth = useContext(AuthContext)

    return(
      <>  
        <NavBar/>
        <div className="title1">
            {auth?.user && `Olá, ${auth?.user?.name}!`}
            <br />
            {auth?.user && <button onClick={auth.signOut}>Sair</button>}
        </div>
        
        <div className="locations_buttons">
            <Locations/>
        </div>
      
        <div className="space_for_cards">
            <div id="grid_div">
                <TestCard/>
            </div>
        </div>
        <Footer/>
    </>
    )
};