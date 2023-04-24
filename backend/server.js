// Import required packages
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Create a new Express app
const app = express();

// Use JSON middleware to parse incoming request bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Create a MySQL connection pool
// fix this when you have your own database (jar file)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Add your Express routes here, e.g., app.get(), app.post(), etc.

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


//routes for the functions
app.post('/insert', async(req, res) => {
    insertData(req.body.data);
    res.send('Data inserted');
});

app.post('/delete', async(req, res) => {
    deleteData(req.body.data);
    res.send('Data deleted');
});

app.post('/update', async(req, res) => {
    updateData(req.body.data);
    res.send('Data updated');
});


//create functions for insert, delete, and update
async function insertData(data) 
{
    try {
        const [rows, fields] = await pool.execute('INSERT INTO `table_name` (`column_name`) VALUES (?)', [data]);
        return {success : true, message: 'Data inserted', rows};
    } catch (err) {
        throw {success : false, message: 'Error inserting data', error:err}
    }
}


async function deleteData(data) 
{
  try {
    const [rows, fields] = await pool.execute('DELETE FROM `table_name` WHERE `column_name` = ?', [data]);
    return {success : true, message: 'Data deleted', rows};
  } catch (err) {
    throw {success : false, message: 'Error deleting data', error:err}
  }
}

async function updateData(data)
{
  try {
    const [rows, fields] = await pool.execute('UPDATE `table_name` SET `column_name` = ? WHERE `column_name` = ?', [data]);
    return {success : true, message: 'Data updated', rows};
    } catch (err) {
    throw {success : false, message: 'Error updating data' , error:err};
  }
}