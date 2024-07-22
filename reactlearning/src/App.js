import './App.css'

function App() {
  return (
    <div>
    
    {/* Inline CSS */}

    <h1 style={{backgroundColor:'red',padding:'10px'}}>Inline CSS</h1>

    {/* External CSS */}
    <h1 className='header'>External CSS</h1>

    {/* Component */}
   <Hello/>
   <Hello/>


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



