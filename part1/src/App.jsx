const Header = (props)=>{
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
    
  )
}

const Part = (props)=>{
  return(
    <p>
      {props.part} {props.excercises}
    </p>    
  )
}
const Content = ()=>{
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return(
    <div>
      <Part part={part1} excercises ={exercises1} />
      <Part part={part2} excercises ={exercises2} />
      <Part part={part3} excercises ={exercises3} />
    </div>  
  )
}

const Total = (props)=>{
  return(
    <div>
      <p>Total of excercises = {props.finalNumbers}</p>
    </div>
    
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const sumOfExer= exercises1 + exercises2 + exercises3;

  return (
    <div>


      <Header title = {course} />
      <Content/>      
      <Total finalNumbers = {sumOfExer}/>

    </div>
  )
}

export default App