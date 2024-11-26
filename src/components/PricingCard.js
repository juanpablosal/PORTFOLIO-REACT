import "./PricingCardsStyles.css";
import { Link } from "react-router-dom";

import React from 'react'

function PricingCard() {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h4>- Basic -</h4>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 3 Days</p>
                    <p>- 3 pages</p>
                    <p>- Featured -</p>
                    <p>- Responsive Desing -</p>
                    <Link to="/Contact" className="btn">
                        PURCHASE NOW
                    </Link>
                </div>

                <div className="card">
                    <h4>- Premiun -</h4>
                    <span className="bar"></span>
                    <p className="btc">$ 200</p>
                    <p>- 2 Days</p>
                    <p>- 5 pages</p>
                    <p>- Featured -</p>
                    <p>- Responsive Desing -</p>
                    <Link to="/Contact" className="btn">
                        PURCHASE NOW
                    </Link>
                </div>

                <div className="card">
                    <h4>- Business -</h4>
                    <span className="bar"></span>
                    <p className="btc">$ 300</p>
                    <p>- 5 Days</p>
                    <p>- 8 pages</p>
                    <p>- Featured -</p>
                    <p>- Responsive Desing -</p>
                    <Link to="/Contact" className="btn">
                        PURCHASE NOW
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default PricingCard; 