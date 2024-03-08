import { useState, useRef, useEffect } from "react";
import './App.css';
import Day from './Day';
import Todo from './Todo';
function App() {

  const [createdList,setCreatedList] = useState();


  
  useEffect(()=>{
  
    console.log("herwe", createdList);
},[createdList])


  return (
    <div className="App">
      <Day createdList={createdList} setCreatedList={setCreatedList}/>
      <Todo setCreatedList={setCreatedList}/>
    </div>
  );
}

export default App;
