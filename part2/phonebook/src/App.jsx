import { useState } from "react"
import Persons from "./components/persons"

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')

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

  const handleFindName = (event) => {
    setFilteredPersons([])
    let aux = []
    persons.map((person) => {
      if (person.name.toLowerCase().includes(event.target.value)) {
        aux.push(person)
      } 
    })
    setFilteredPersons(aux)
    setFindName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:<input 
                            value={findName}
                            onChange={handleFindName} /> 
      </div>
      <h2>add a new</h2>
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
      <Persons key={filteredPersons.id} persons={filteredPersons} />
    </div>
    
  )
}

export default App