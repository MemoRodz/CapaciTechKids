
import { Routes, Route } from 'react-router-dom'
import { Home, Courses, About } from './pages/index'
import Layout from './component/Layout/Layout'

function App() {

  return (
    <>
    <Layout>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </main>
    </Layout>
    </>

  )
}

export default App
