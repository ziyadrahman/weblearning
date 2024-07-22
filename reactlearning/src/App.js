import './App.css'
import Header from './components/Header';

const data='Ziyad'
function App() {
  return (
    <div>

      <Header data={data} />
    
    {/* Inline CSS */}

    <h1 style={{backgroundColor:'red',padding:'10px'}}>Inline CSS</h1>

    {/* External CSS */}
    <h1 className='header'>External CSS</h1>

    {/* Component */}
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



