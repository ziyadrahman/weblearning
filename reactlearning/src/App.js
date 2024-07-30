import './App.css'
import Header from './components/Header';
import Counter from'./components/Counter';
import React,{useState} from 'react';
import Employee from './components/Employee';

const data='Ziyad'
function App() {

  const [count,setCount]=useState(0);
  

  /* For Spread Operator Using*/
  let datas ={
    title:'Compoenent Counter',
    count,
    text:' tests'
  }

  let emp=[
    {name:'ziyad',age:28},
    {name:'emp2',age:18},
    {name:'emp3',age:18},
    {name:'emp4',age:18},
    {name:'emp5',age:18},
  ];

  


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


    {/*Spread Operator Using*/}
   <Counter {...datas} />

   <button onClick={()=>setCount(count+1)}>Increment</button>
   <button onClick={()=>setCount(count-1)}>Decrement</button>
   <button onClick={()=>setCount(0)}>Reset</button>

   <hr></hr>

   <h1>Employee - Map Example</h1>

   {/*Below Map Loop n time of emp length*/}
   {
    emp.map((obj,index)=> <Employee key={index} {...obj}/>
      )
    }
   

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



