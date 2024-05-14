import { useState, useEffect } from "react"
import personsServices from "./services/persons"
import Persons from "./components/persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"

const App = () => {

  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')

  useEffect(() => {
    personsServices
      .getAll()
      .then(response => {
        setPersons(response.data)
        setFilteredPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNumber
    }
    personsServices
      .create(personsObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setFilteredPersons(filteredPersons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
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

      <Filter findName={findName} handleFindName={handleFindName} />

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons key={filteredPersons.id} persons={filteredPersons} />
    </div>
    
  )
}

export default App