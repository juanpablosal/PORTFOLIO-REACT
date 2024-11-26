import "./WorkCardStyles.css" ; 
import { NavLink } from "react-router-dom";
import React from 'react'

function WorkCard(props) {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
    <h2 className="project-tittle">{props.title}</h2>
    <div className="pro-details"> 
        <p>{props.text}</p>

        <div className="pro-btns">
            <NavLink to={props.view} className="btn">Mirar</NavLink>
            <NavLink to="google.com" className="btn">Fuente</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard ; 
