import { Card } from "./components/Cards/card"
import {Navbar} from "./components/Navbar/navbar.jsx"
import {Locations} from "./components/LocationsCarrousel/Locations"
import './app_style.css'
export const App = () => {

  return (
    <>
      <Navbar/>
      <div className="title1">
        <h1>Placeholder for title</h1>
      </div>
      
      <div className="locations_buttons">
        <Locations/>
      </div>
      
      <div className="space_for_cards">
        <div id="grid_div">
          <Card/>
        </div>
      </div>
    </>
  )
}

export default App
