import {Button} from "./Button";
// import {Link} from "react-router-dom";
import "./ModifyDatabase.css";
import React, { useState } from 'react';
import SQLmod from "./SQLmod";


function ModifyDatabase() {
    const [showInsert, setShowInsert] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const showInsertComponent = () => {
        setShowInsert(true);
    };

    const closeInsertComponent = () => {
        setShowInsert(false);
    };

    const showUpdateComponent = () => {
        setShowUpdate(true);
    };

    const closeUpdateComponent = () => {
        setShowUpdate(false);
    };
    
    const showDeleteComponent = () => {
        setShowDelete(true);
    };

    const closeDeleteComponent = () => {
        setShowDelete(false);
    };

    return (
        <div className="modifyDatabase">
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Modify Database</h1>
            <div className='modifyDatabase-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={showInsertComponent}>
                    INSERT
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={showUpdateComponent}>
                    UPDATE
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={showDeleteComponent}>
                    DELETE
                </Button>

                <SQLmod show={showInsert} handleClose={closeInsertComponent} title="Insert SQL Command" />
                <SQLmod show={showUpdate} handleClose={closeUpdateComponent} title="Update SQL Command" />
                <SQLmod show={showDelete} handleClose={closeDeleteComponent} title="Delete SQL Command" />

                </div>
        </div>
    );
}

export default ModifyDatabase