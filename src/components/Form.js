import "./FormStyles.css" ; 

import React from 'react'

function form() {
  return (
    <div className="Form">
      <form>
        <label> Tu nombre</label>
        <input type="text"></input>

        <label> Tu Email</label>
        <input type="email"></input>

        <label>Asunto</label>
        <input type="text"></input>

        <label>Mensaje</label>
        <textarea rows="6" placeholder="type your mensaje here" />

        <button type="submit" className="btn">Enviar</button>
      </form>
    </div>
  )
}

export default form
