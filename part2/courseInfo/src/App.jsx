import React from "react"

const Course = ({course}) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
    ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
  <Course course={courses} />
  )
}

export default App