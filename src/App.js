import logo from './logo.svg';
import './App.css';

const App = () => {

  const Person = (props) => {
    return (
      <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastname}</h2>
      <h2>Age: {props.age}</h2>
      </>
    )
  }
  const name = "Ante";
  const isNameShowing = false;
  return (
    <div className="App">
      <Person name = {'John'} lastname = {"Doe"} age = "30" ></Person>
      <Person name ="Mary" lastname = "Doe"></Person>
      
    </div>
  );
}

export default App;
