const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  //console.log(props)
  const {course} = props
  return <h1>{course.name}</h1>
}

const Content = (props) => {
  console.log(props)
  const {parts} = props
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = () => {}

const Part = (props) => {
  const { name, exercises} = props
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

export default App