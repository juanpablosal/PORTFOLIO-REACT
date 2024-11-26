import "./FooterStyles.css";
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaInstagram, FaWhatsapp } from "react-icons/fa";
import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>Medellín, Colombia</p>

                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            +57 314-252-7679</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            juan.salazar2004@yahoo.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>A cerca de mí</h4>
                    <p>Todos los proyectos presentados en este sitio web representan mi respuesta personal a diversas problemáticas que he decidido abordar y resolver.</p>
                    <div className="social">

                        <a href="https://api.whatsapp.com/send?phone=573142527679" target="_blank"> <FaWhatsapp
                            size={30}
                            style={{ color: "white", marginRight: "2rem" }} />
                        </a>
                        
                        <a href="https://www.instagram.com/funners_master" target="blank"><FaInstagram
                            size={30}
                            style={{ color: "white", marginRight: "2rem" }}
                        /></a>_
                        
                        <a href="https://www.linkedin.com/public-profile/settings" target="blank"><FaLinkedin
                            size={30}
                            style={{ color: "white", marginRight: "2rem" }}
                        /></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
