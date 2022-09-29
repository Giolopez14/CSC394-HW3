const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:Soccer#280@database-hw3.c5ynplgmalol.us-east-2.rds.amazonaws.com'

const pool = new Pool({
  connectionString,
})

const client = new Client({
  connectionString
})

client.query("SELECT VERSION();", (err, res) =>{
	client.end();
	version=res.rows;
});

module.exports = pool;
