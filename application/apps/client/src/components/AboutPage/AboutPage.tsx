import "./AboutPage.css";
import { NavBar } from "../Navbar/navbar.js";
import { Footer } from "../Footer/Footer.js";


export const AboutPage = () => {
    return(
        <>
            <NavBar/>
            <div className="great_container">

                <div className="title_div">
                    <h2>o que é o HelpCife?</h2>
                </div>

                <div className="about_text_div1">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto cumque magni 
                        sapiente culpa sint tempora debitis vel, veniam, corrupti, possimus suscipit 
                        alias porro! Voluptatem facilis magnam nostrum omnis ut.
                    </h3>
                </div>

            </div>
            <Footer/>
        </>
    )
}