import { Locations } from "../LocationsCarrousel/Locations.js"
import { Footer } from "../Footer/Footer.js"
import {NavBar} from "../Navbar/navbar.jsx"
import {TestCard} from "../TestCard/TestCard"
import './HomePage.css'
import { useAuth } from "../../contexts/auth/AuthContext.js"

export const HomePage = () => {

    const { createInitiative } = useAuth()

    function teste(){
        createInitiative(
            "Ajude marcelo Jota", "contabilidade", "Iputinga", null, null, null)
    }

    return(
      <>  
        <NavBar/>

        <button onClick={teste}>Criar Iniciativa</button>
        
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