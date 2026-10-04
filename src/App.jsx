import React from 'react'

const Header = (props) => {
  return (
    <header className="header-container">
      <h1>{props.course.name}</h1>
    </header>
  )
}

const Part = (props) => {
  return (
    <div className="part-card">
      <h3>{props.part.name}</h3>
      <p>Units: <strong>{props.part.exercises}</strong></p>
    </div>
  )
}

const Content = (props) => {
  return (
    <main className="content-container">
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </main>
  )
}

const Total = (props) => {
  const totalUnits = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return (
    <section className="total-container">
      <p>Total Course Units: <strong>{totalUnits}</strong></p>
    </section>
  )
}

const Footer = (props) => {
  return (
    <footer className="footer-container">
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'BSIT Curriculum Overview - CSIT340',
    parts: [
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
  }

  const studentInfo = {
    fullName: 'Zeus B. Cansancio',
    courseCode: 'CSIT340',
    section: 'G6'
  }

  return (
    <div className="app-layout">
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer 
        fullName={studentInfo.fullName} 
        courseCode={studentInfo.courseCode} 
        section={studentInfo.section} 
      />
    </div>
  )
}

export default App