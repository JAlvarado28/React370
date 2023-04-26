import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Cards</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <Carditem 
                        src="images/chico-1.jpg"
                        text="Explore the database created by the students of CSU Chico and more about our class Cins 370"
                        label="Chico"
                        path="/About Us"
                        />
                    </ul>
                </div>
            </div>
        </div>  
    );
}

export default Cards