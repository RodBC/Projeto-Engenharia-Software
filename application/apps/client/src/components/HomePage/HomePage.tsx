import { Locations } from "../LocationsCarrousel/Locations.js"
import { Footer } from "../Footer/Footer.js"
import {NavBar} from "../Navbar/navbar.jsx"
import {TestCard} from "../TestCard/TestCard"
import { useAuth } from "../../contexts/auth/AuthContext.js"

export const HomePage = () => {

    const { createInitiative } = useAuth()

    function ativar(){
        createInitiative("Pirão", "nda", "Várzea", null, null, null)
    }

    return(
      <>  
        <NavBar/>
        <button onClick={ativar}>teste</button>
      
            <TestCard/>
        
        <Footer/>
    </>
    )
};