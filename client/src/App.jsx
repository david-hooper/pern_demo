import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/HomePage/HomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [students, setStudents] = useState([]);
  const base_url = "http://localhost:3002/api/"
  
  
  useEffect(() => {
    let getStudents = async () => {
      let response = await fetch(base_url + 'students');
      let studentsArray = await response.json();
      setStudents(studentsArray)
    }
    getStudents();
  }, [])
  console.log(students);
  return (
    <>
      {/* {students[0]&&students[0].name} */}
      {/* {students[0]?students[0].name:"loading"} */}
      {students[0]?<HomePage students={students}/>:"loading"}
    </>
  )
}

export default App
