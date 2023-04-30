// Import required packages
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

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
  user: 'root',
  password: 'CINS3701',
  database: 'American_Theaters',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Add your Express routes here, e.g., app.get(), app.post(), etc.

// Start the server on port 5000
app.listen(5021, () => {
  console.log('Server is running on port 5021');
});


//routes for the functions
app.post('/insert', async(req, res) => {
  const result = await insertData(req.body.sqlCommand);
  console.log('Received SQL Insert query:', req.body.sqlCommand)
  res.send(result.message)
});

app.post('/delete', async(req, res) => {
  const result = await deleteData(req.body.sqlCommand);
  console.log('Received SQL Delete query:', req.body.sqlCommand)
  res.send(result.message);
});


app.post('/update', async(req, res) => {
  const result = await updateData(req.body.sqlCommand);
  console.log('Received SQL Update query:', req.body.sqlCommand)
  res.send(result.message);
});


app.post('/execute-select-sql', async(req, res) => {
  const sqlCommand = req.body.sqlCommand;
  console.log('Received SQL query:', sqlCommand);
  try {
    const [rows] = await pool.query(sqlCommand);
    const tableName = extractTableName(sqlCommand);//extract table name from SQL query
    res.send({data: rows, tableName : tableName});
    } catch (error){
      console.log('Error in /execute-select-sql route', error);
      res.status(500).send({message: 'Error executing Select query', error});
    }
});


// app.get('fetch-data', async(req, res) => {
//   const sqlCommand = 'SELECT * FROM Movies';
//   try {
//     const [rows, fields] = await pool.execute(sqlCommand);
//     res.send(rows);
//     } catch (error) {
//       res.status(500).send({message: 'Error fetching data', error});
//     }
// });

function extractTableName(sqlCommand){
  const matches = sqlCommand.match(/FROM\s+([^\s]+)\s*(?:WHERE|ORDER|LIMIT|$)/i);
  if (matches) {
    return matches[1];
  } else {
    return null;
  }
}

//create functions for insert, delete, and update
async function insertData(sqlCommand) 
{
    try {
        const [rows] = await pool.query(sqlCommand);
        return {success : true, message: 'Data inserted', rows};
    } catch (err) {
        throw {success : false, message: 'Error inserting data', error:err}
    }
}


async function deleteData(sqlCommand) 
{
  try {
    const [rows] = await pool.query(sqlCommand);
    return {success : true, message: 'Data deleted', rows};
  } catch (err) {
    throw {success : false, message: 'Error deleting data', error:err}
  }
}

async function updateData(sqlCommand)
{
  try {
    const [rows] = await pool.query(sqlCommand);
    return {success : true, message: 'Data updated', rows};
    } catch (err) {
    throw {success : false, message: 'Error updating data' , error:err};
  }
}