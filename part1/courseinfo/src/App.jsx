const Header = (props) => {
return (<div><h1>Name of Course: {props.course}</h1></div>)
}

const Content = (props) => {
return (
<div>
<h3>Contents of the Course:-</h3>
<p><b>Part 1:</b> {props.part1} , <b>Exercises: </b>{props.exercises1}</p>
<p><b>Part 2:</b> {props.part2} , <b>Exercises: </b>{props.exercises2}</p>
<p><b>Part 3:</b> {props.part3} , <b>Exercises: </b>{props.exercises3}</p>
</div>
)
}

const Total = (props) => {
return (<div><strong>Total Exercises:</strong> {props.total}</div>)
}

const App = () => {
const course = "Half Stack Application Development"
const part1 = "Fundamentals of React"
const exercises1 = 10
const part2 = "Using Properties to pass Data"
const exercises2 = 7 
const part3 = "State of the Component"
const exercises3 = 14 
const total = exercises1+exercises2+exercises3
return (
  <div>
    <Header course={course} />
    <Content 
      part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3} 
    />
    <Total total={exercises1 + exercises2 + exercises3} />
  </div>
)
}

export default App