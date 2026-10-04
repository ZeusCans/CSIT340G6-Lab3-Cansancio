const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} - {props.units} units</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} units={props.part1.units} />
      <Part name={props.part2.name} units={props.part2.units} />
      <Part name={props.part3.name} units={props.part3.units} />
    </div>
  )
}

const Total = (props) => {
  return <p>Total units: {props.total}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.code} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'
  const part1 = {
    name: 'CSIT327 - Information Management 2',
    units: 3
  }
  const part2 = {
    name: 'IT317 - Project Management',
    units: 3
  }
  const part3 = {
    name: 'IT365 - Data Analytics 1',
    units: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.units + part2.units + part3.units} />
      <Footer name="Ralph Miguel Sabellano" code="CSIT340" section="G7" />
    </div>
  )
}

export default App