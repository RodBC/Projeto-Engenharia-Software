import React from "react";
import "./AboutPage.css";
import {Navbar} from "../Navbar/navbar.jsx"
import { Footer } from "../Footer/Footer.js";


export const AboutPage = () => {
    return(
        <>
            <Navbar/>
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