import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState(0)

  const getValues = () => {
    console.log(name, age, country, position, wage)
  }

  return (
    <div className="App">
      <div className="information">
        <h1>React mySQL Crud</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="country"
          id="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          name="position"
          id="position"
          onChange={(e) => setPosition(e.target.value)}
        />
        <label htmlFor="wage">Wage (year):</label>
        <input
          type="number"
          name="wage"
          id="wage"
          onChange={(e) => setWage(e.target.value)}
        />
        <input type="button" value="Submit" onClick={getValues} />
      </div>
    </div>
  )
}

export default App
