import React,{useState} from "react";
import "./App.css";


function App(){
  const[count,setCount]=useState(0);



  return(
    <div >
      <header>
        <h1>Counter app using state/Hooks</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={()=>setCount(0)} >Reset Counter</button>
      <button onClick={()=>(count >=10 ? "Nill" :setCount(count + 1))}>Increase Counter</button>
      <button onClick={()=>(count <=0 ? "Nill" :setCount(count - 1))}>Decrease Counter</button>
    </div>
  );
}




export default App;