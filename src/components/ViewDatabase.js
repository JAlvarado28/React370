import React from "react";
// import {Button} from "./Button";
// import {Link} from "react-router-dom";
import "./ViewDatabase.css";
import backgroundImage from "../imagesSRC/porsche.jpg";

function ViewDatabase() {
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return (
        <div className="viewDatabase-container" style={backgroundImageStyle}>
            <h1>View Database</h1>
            <p>This where the data will be at! Just wait! Please!</p>
        </div>

    );
}

export default ViewDatabase