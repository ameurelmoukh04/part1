const Header = (props) =>{
  return(
  
    <h1>{props.course}</h1>
    
  )
}

const Part = (props) => {
  return(
  <p>
    {props.name} {props.exercises}
  </p>
  )
}
 
const Content = (props) =>{
  return(
    <div>
     {props.parts.map((part, index) => (
      <Part key={index} name={part.name} exercises={part.exercises}/>
     ))}
    </div>
  );
};
const Total = (props) =>{
  return( 
    <p>Number of exercises : {props.parts}</p>
  )
}
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
    const parts = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);
     
    console.log()
  return (
    <div>
      <Header course={course.name} />
     <Content parts={course.parts}/>

    <Total parts={parts} />
    </div>
  )
  }

export default App