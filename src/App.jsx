const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} - {props.units} units</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} units={props.parts[0].units} />
      <Part name={props.parts[1].name} units={props.parts[1].units} />
      <Part name={props.parts[2].name} units={props.parts[2].units} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {props.parts[0].units + props.parts[1].units + props.parts[2].units}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.code} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      {
        name: 'CSIT327 - Information Management 2',
        units: 3
      },
      {
        name: 'IT317 - Project Management',
        units: 3
      },
      {
        name: 'IT365 - Data Analytics 1',
        units: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name="Ralph Miguel Sabellano" code="CSIT340" section="G7" />
    </div>
  )
}


export default App