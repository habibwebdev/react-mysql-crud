const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  database: 'react-mysql-crud',
  user: 'root',
  password: 'password',
})

db.connect((error) => {
  if (error) {
    console.log('Error is: ' + error)
  } else {
    console.log('connection is established successfully!')
  }
})

// Routes
app.get('/', (req, res) => {
  res.send('API is running...')
})

app.post('/create', (req, res) => {
  // console.log(req.body)
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage

  db.query(
    'INSERT INTO employees (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)',
    [name, age, country, position, wage],
    (error, result) => {
      if (error) {
        console.log(error)
      } else {
        res.send('Data inserted successfully!')
      }
    }
  )
})

app.get('/employees', (req, res) => {
  db.query('SELECT * FROM employees', (error, result) => {
    if (error) {
      console.log(error)
    } else {
      res.send(result)
    }
  })
})

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`)
})
