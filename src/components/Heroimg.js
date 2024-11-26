import "./HeroImgStyles.css" ; 
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg" ; 
import { Link } from "react-router-dom" ; 

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="this is not working"/>
      </div>
      <div className="content">
        <p>HOLA, SOY UN FREELANCER.</p>
        <h1>Desarrollador de react.</h1>
        <div>
          <Link to="/project" className="btn">PROYECTOS</Link>
          <Link to="/contact" className="btn btn-light">CONTACTO</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
