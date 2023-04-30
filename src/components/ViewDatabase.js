import React, { useState } from "react";
import "./ViewDatabase.css";
import backgroundImage from "../imagesSRC/screen.jpg";
import ViewDatabaseModal from "./ViewSQLmod.js";
import { Button } from "./Button.js";

function ViewDatabase() {
  // for database query
  const [data, setData] = useState([]);
  const [tableName, setTableName] = useState("");
  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // allows the image to be displayed
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  // displays the data
  const renderData = () => {
    return data.map((row, index) => {
      return (
        <tr key={index}>
          {Object.values(row).map((value, index) => {
            return <td key={index}>{value}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div className="viewDatabase-container" style={backgroundImageStyle}>
        <div className='modifyDatabase-header'>
      <h1>Transactions</h1>
      <p>Use Select</p>
      </div>
      <div className='modifyDatabase-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={openModal}>
            Transaction </Button> 
      <ViewDatabaseModal
        show={showModal}
        handleClose={closeModal}
        setData={(data, tableName) => {
        setData(data);
        setTableName(tableName);
        }}
        route="/execute-select-sql"
      />
      </div>
      <div className="table-title"> Table: {tableName}  </div>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key, index) => {
                return <th key={index}>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      )}
    </div>
  );
}

export default ViewDatabase;
