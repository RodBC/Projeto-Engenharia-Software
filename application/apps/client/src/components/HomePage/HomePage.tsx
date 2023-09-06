import { Card } from "../Cards/card"
// import {Navbar} from "../Navbar/navbar.jsx"
import {Locations} from "../LocationsCarrousel/Locations"
import './HomePage.css'
import { Footer } from "../Footer/Footer.js"

import {Navbar} from "../Navbar/navbar.jsx"
import {TestCard} from "../TestCard/TestCard"
// import {Routes, Route} from 'react-router-dom'


export const HomePage = () => {
    return(
      <>  
        <Navbar/>
        <div className="title1">
            <h1>HelpCife</h1>
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