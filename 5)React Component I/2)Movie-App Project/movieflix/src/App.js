
import MovieList from "./MovieList";
import Student from "./propsExample";


function App() {
  return (
    <>
    <h1>Movie App</h1>
    <MovieList/>
    {/* <Student name="Devansh" marks={98}/>
    <Student name="Raj" marks={98}/>
    <Student name="Rohan" marks={98}/>
    <Student  /> Example of showing default props if you forget passing it */}
    </>
  );
}

Student.defaultProps ={
  name:"Student",
  marks:"NA"
}

export default App;
