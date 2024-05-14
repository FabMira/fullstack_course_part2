const Persons = ({ person, erase }) => {
    return (
      <>
        <p key={person.id}>{person.name} {person.number} <button onClick={erase}>delete</button></p>
      </>
    )
  }

export default Persons