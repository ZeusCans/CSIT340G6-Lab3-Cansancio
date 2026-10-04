import React from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
}

const App = () => {
  const course = 'BSIT Curriculum Overview - CSIT340'
  const parts = [
    {
      name: 'CSIT340 - Web Development',
      exercises: 3
    },
    {
      name: 'IPT301 - Integrative Programming',
      exercises: 3
    },
    {
      name: 'IM301 - Information Management',
      exercises: 3
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App