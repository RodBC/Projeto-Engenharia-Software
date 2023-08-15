import { Card } from "./components/Cards/card"
import {Navbar} from "./components/Navbar/navbar.jsx"
import './app_style.css'
export const App = () => {

  return (
    <>
      <Navbar/>

      <div className="title1">
        <h1>Placeholder for title</h1>
      </div>
      
      <div className="locations_buttons">
        <h1>Placeholder for locations</h1>
      </div>
      
      <div className="space_for_cards">
        <Card/>
        <Card/>
        <Card/>

      </div>
    </>
  )
}

export default App
