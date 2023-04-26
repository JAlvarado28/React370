import React, {useState } from "react";
import "./SQLmod.css"

const SQLmod = ({show, handleClose, title}) => {
    const [sqlQuery, setSqlQuery] = useState("");

    const handleInputChange = (e) => {
        setSqlQuery(e.target.value);
    };
    const handleSubmit = () => {
        console.log("Submitted SQL query:" , sqlQuery);
        handleClose();
    };
    return (
        <>
        {show && (
            <div className="mod-container" onClick={handleClose}>
                <div className="mod-content" onClick={(e) => e.stopPropagation()}>
                    <h2>{title}</h2>
                    <textarea
                        value={sqlQuery}
                        onChange={handleInputChange}
                        placeholder="Enter SQL query command here"
                        rows={5}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleClose}>Cancel</button>
                </div>  
            </div>
        )}
        </>
    )

} 

export default SQLmod