import { useState, useEffect } from "react"
import personsServices from "./services/persons"
import Persons from "./components/persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import Notification from "./components/notification"
import sortNames from "./services/sortNames"

const App = () => {

  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('someone was added...')
  const [notificationClass, setNotificationClass] = useState('notification')

  useEffect(() => {
    personsServices
      .getAll()
      .then(response => {
        const personsSorted = sortNames(response.data)
        setPersons(personsSorted)
        setFilteredPersons(personsSorted)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNumber
    }

    const repeated = persons.find(person => person.name === personsObject.name) 
    if (repeated != null) {
      const changedPerson = { ...repeated, number: newNumber}
        console.log(changedPerson.name.toLocaleLowerCase())
          if(confirm(`${personsObject.name} is already added to phonebook, replace the old number with a new one?`)) {
            personsServices
              .update(changedPerson.id, changedPerson)
              .then(response => {
                const indexOfChangedPerson = persons.findIndex((person) => person.id == response.data.id)
                persons.splice(indexOfChangedPerson, 1, response.data)
                filteredPersons.splice(indexOfChangedPerson, 1, response.data)
                setNewName('')
                setNewNumber('')
                setNotificationMessage(`Updated ${response.data.name}'s number`)
                setTimeout(() => {
                  setNotificationMessage(null)
                }, 5000)
              })
              .catch(error => {
                setNotificationMessage(
                  `Information of ${personsObject.name} has already been removed from server`
                )
                setNotificationClass('error')
              })
          }
    } else {
      personsServices
      .create(personsObject)
      .then(response => {
        const personsNew = persons.concat(response.data)
        const personsSorted = sortNames(personsNew)
        setPersons(personsSorted)
        setFilteredPersons(personsSorted)
        setNewName('')
        setNewNumber('')
        setNotificationMessage(`Added ${response.data.name}`)
        setNotificationClass('notification')
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
    }
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
      if (person.name.toLowerCase().includes(event.target.value.toLocaleLowerCase())) {
        aux.push(person)
      } 
    })
    setFilteredPersons(aux)
    setFindName(event.target.value)
  }

  const erase = (person) => {
    if (confirm(`Delete ${person.name} ?`)) {
      console.log(`${person.name} deleted.`)
      personsServices
        .erase(person.id, person)
        .then(response => {
          console.log(response.data)
          setPersons(persons.filter((person) => person.name != response.data.name))
          setFilteredPersons(filteredPersons.filter((filteredPerson) => filteredPerson.name != response.data.name))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification className={notificationClass} message={notificationMessage} />

      <Filter findName={findName} handleFindName={handleFindName} />

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      {filteredPersons.map((person) => 
        <Persons 
          key={person.id} 
          person={person}
          erase={() => erase(person)}/>
      )}
    </div>
    
  )
}

export default App