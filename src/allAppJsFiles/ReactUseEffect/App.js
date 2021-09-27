// import { useState } from 'react';
import './App.css';
// import UseFirst from './components/ReactUseEffect/UseFirst';
// import SomeCounter from './components/ReactUseEffect/SomeCounter';
// import Counter from './components/ReactUseEffect/Counter';
// import AddTask from './components/ReactUseEffect/AddTask';
import ShowMyTodo from './components/ReactUseEffect/ShowMyTodo';


function App() {
  // const [showCounter, setShowCounter] = useState(true)
  return (
    <div className="container">
      {/* {showCounter && <UseFirst />}
      <button onClick={() => setShowCounter(!showCounter)} className="btn btn-primary">
        Show Here
      </button>
      <SomeCounter />
      <Counter /> */}
      {/* <AddTask /> */}
      <ShowMyTodo/>
    </div>
  );
}

export default App;
