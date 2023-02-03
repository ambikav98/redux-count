// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreasingQuantity, increasingQuantity, reset } from './redux/actions/Actions';
import "./App.css"

const App = () => {
  const dispatch=useDispatch()
  const count = useSelector(state=>state.count)
  
  const decreaseHandler = () =>{
     dispatch(decreasingQuantity())
  }
  const increaseHandler = () =>{
    dispatch(increasingQuantity())
 }
 const resetHandler = () =>{
  dispatch(reset())
}
  return (
    <>
    <div className='App'>
    <h1>{count}</h1>
    
    <button onClick={decreaseHandler}>-</button>
    <button onClick={increaseHandler}>+</button><br/>
    <button onClick={resetHandler}>Reset</button>
    </div>
    </>
  )
}

export default App
