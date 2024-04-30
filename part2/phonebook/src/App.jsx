import { useState } from "react"
import Persons from "./components/persons"

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 0}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    const names = persons.map((person) => person.name)
    const repeated = (names.includes(newName))
    ? alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(personsObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange} />
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange} />
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