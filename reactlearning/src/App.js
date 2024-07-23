import './App.css'
import Header from './components/Header';
import React,{useState} from 'react';

const data='Ziyad'
function App() {

  const [count,setCount]=useState(0);




  return (
    <div>

     

      <Header data={data} />
    
    {/* Inline CSS */}

    <h1 style={{backgroundColor:'red',padding:'10px'}}>Inline CSS</h1>

    {/* External CSS */}
    <h1 className='header'>External CSS</h1>

    {/* Component */}
   <Hello/>
   <h2>State</h2>

   <p>Counter:{count}</p>
   <p>Counter:{count}</p>
   <button onClick={()=>setCount(count+1)}>Increment</button>
   <button onClick={()=>setCount(count-1)}>Decrement</button>
   <button onClick={()=>setCount(0)}>Reset</button>



    </div>
  );
}
function Hello()
{
  return(
    <h1 style={{backgroundColor:'blue',padding:'10px'}}>This a Component</h1>
  );
}

export default App;



