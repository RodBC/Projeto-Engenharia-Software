import {Locations} from "../LocationsCarrousel/Locations"
import { Footer } from "../Footer/Footer.js"
import {NavBar} from "../Navbar/navbar.jsx"
import {TestCard} from "../TestCard/TestCard"
import './HomePage.css'

export const HomePage = () => {

    return(
      <>  
        <NavBar/>
        
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