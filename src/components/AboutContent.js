import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react'
import pro1 from "../assets/pro1.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Quien soy?</h1>
                <p>Soy un desarrollador de react front-end. Creo sitios web responsivos y seguros para mis clientes.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top" >
                        <img src={pro1} className="img" alt="true"/>
                    </div>

                    <div className="img-stack bottom">
                        <img src={pro1} className="img" alt="true"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent; 
