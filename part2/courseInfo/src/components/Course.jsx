import React from "react"

const Course = ({course}) => {
    return (
      <div>
        {course.map((curso) => (
          <React.Fragment key={curso.id}>
            <h2>{curso.name}</h2>
            {curso.parts.map((part) => (
              <p key={part.id}>{part.name} {part.exercises}</p>
            ))}
            <h3>total of {curso.parts.map((parte) => parte.exercises)
            .reduce((acum, curr) => acum + curr, 0)} exercises</h3>
          </React.Fragment>  
        ))}
      </div>
    )
  }

  export default Course