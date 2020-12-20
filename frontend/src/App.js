import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [position, setPosition] = useState('')
  const [wage, setWage] = useState(0)

  const [eList, setEList] = useState([])

  const storeDetails = async () => {
    // console.log(name, age, country, position, wage)
    // try {
    //   const insert = await axios.post('http://localhost:5000/create', {
    //     name: name,
    //     age: age,
    //     country: country,
    //     position: position,
    //     wage: wage,
    //   })
    //   console.log(insert.data)
    // } catch (error) {
    //   // Handle the error
    //   console.log(error)
    // }
    axios
      .post('http://localhost:5000/create', {
        name,
        age,
        country,
        position,
        wage,
      })
      .then(() => {
        console.log('success!!!')
        getEList()
        setEList([
          ...eList,
          {
            name,
            age,
            country,
            position,
            wage,
          },
        ])
      })
  }

  const getEList = () => {
    axios.get('http://localhost:5000/employees').then((response) => {
      console.log(response)
      setEList(response.data)
    })
  }

  return (
    <>
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
          <input type="button" value="Submit" onClick={storeDetails} />
        </div>
      </div>
      <hr />

      <div className="employees">
        <button onClick={getEList}>Show Employees</button>
        {eList.length > 0 && (
          <div className="employees-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>COUNTRY</th>
                  <th>POSITION</th>
                  <th>WAGE/yr</th>
                </tr>
              </thead>
              <tbody>
                {eList.map((em, key) => {
                  return (
                    <tr key={key}>
                      <td>{em.id}</td>
                      <td>{em.name}</td>
                      <td>{em.age}</td>
                      <td>{em.country}</td>
                      <td>{em.position}</td>
                      <td>{em.wage}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default App
