import './App.css';
import { useState } from 'react'
import Content from './Content';
import Upload from './Upload';
function App() {
  const [show,setshow] = useState(false)
  const handleClick = ()=>{
    setshow(!show)
  }
  return (
    <div className="App1" style={{padding:32}}>
      <button onClick={handleClick}>Toggle</button>
      {/* {show && <Content/>} */}
      <Upload></Upload>
    </div>
  );
}

export default App;
