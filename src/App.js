import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
    
  )
}

const App = () => {
  const isUserLoggedIn = true;

  return (
    <div className="App">
        <Person name={'Jane'} lastName={'Doe'} age = {'24'}/>
        <Person name={'John'} lastName={'Doe'} age = {10+24}/>
    </div>
  );
}

export default App;
