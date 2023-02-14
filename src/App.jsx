
import {Course, Courses} from './component/index'

import './App.css'

function App() {


  return (
    <div className="App">
     
      <Courses/>
      
    </div>

import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/index'

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<h1>cursos</h1>} />
          <Route path='/detail' element={<h1>detalles</h1>} />
        </Routes>
      </main>
    </>

  )
}

export default App
