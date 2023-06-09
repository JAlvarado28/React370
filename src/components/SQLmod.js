import React, {useState } from "react";
import "./SQLmod.css"

const SQLmod = ({show, handleClose, title, route}) => {
    const [sqlQuery, setSqlQuery] = useState("");

    const handleInputChange = (e) => {
        setSqlQuery(e.target.value);
    };
    const handleSubmit = async() => {
        console.log("Submitted SQL query:" , sqlQuery);
        try {
            const response = await fetch(`http://localhost:5021${route}` , {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({sqlCommand: sqlQuery}),
            });
            if(!response.ok) {
                throw new Error('Failed to execute SQL query');
            }
            const result = await response.text();
            console.log("Result: ", result);
        } catch(error){
            console.log("Error: ",error);
        }
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