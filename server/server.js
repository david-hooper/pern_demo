const express = require('express')
const app = express()
const dotenv = require('dotenv');
const cors = require('cors');
const { Pool } = require('pg');


dotenv.config();
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

const port = process.env.PORT || 3001
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/students', (req, res) => {
    pool.query(`SELECT * FROM student`, (err, response) => {
        res.json(response.rows)
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})