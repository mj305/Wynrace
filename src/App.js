import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/classes`)
    .then(response => response.json())
    .then(
      classRoom => {
        setClasses(classRoom);
      }
    )
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          {classes.map(classRoom => {
        return <p key={classRoom.type}>{classRoom.type}</p>
        
      })}
      </header>
  
    </div>
  );
}

export default App;
