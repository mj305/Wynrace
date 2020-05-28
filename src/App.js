import React, {useState, useEffect} from 'react';
import NewStudent from "./components/NewStudent";
import logo from './wlogo.png';
import './App.css';

function App() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/admin`)
    .then(response => response.json())
    .then(
      classRoom => {
        setStudent(classRoom);
      }
    )
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewStudent />
        
          {student.map(classStudent => {
        return <p key={classStudent.name}>{classStudent.name}</p>

      })}
      </header>
    </div>
  );
}

export default App;
