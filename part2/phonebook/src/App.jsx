import { useState } from "react"
import Persons from "./components/persons"

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0}
  ])
  const [newName, setNewName] = useState('')
//alert(`${newName} is already added to phonebook`)
  const addName = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      id: persons.length + 1
    }
    const names = persons.map((person) => person.name)
    const repeated = (names.includes(newName))
    ? alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(personsObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons key={persons.id} persons={persons} />
    </div>
    
  )
}

export default App