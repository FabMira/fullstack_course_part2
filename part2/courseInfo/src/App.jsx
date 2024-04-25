
const Course = ({course}) => {
  
  const total = course.parts.map((partes) => partes.exercises)
  .reduce((acum, curr) => acum + curr, 0)
  console.log(total);
  
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((partes) => (
        <p key={partes.id}>{partes.name} {partes.exercises}</p>
      ))}
      <h4>total of {total} exercises</h4>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  return <Course key={course.id} course={course} />
}

export default App