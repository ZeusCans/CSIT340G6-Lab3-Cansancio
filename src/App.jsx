const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} - {props.units1} units</p>
      <p>{props.part2} - {props.units2} units</p>
      <p>{props.part3} - {props.units3} units</p>
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
  const part1 = 'CSIT327 - Information Management 2'
  const units1 = 3
  const part2 = 'IT317 - Project Management'
  const units2 = 3
  const part3 = 'IT365 - Data Analytics 1'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer name="Ralph Miguel Sabellano" code="CSIT340" section="G7" />
    </div>
  )
}

export default App