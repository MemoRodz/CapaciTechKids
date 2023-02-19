
import { Routes, Route } from 'react-router-dom'
import { Home, Courses, About, Donate, Create } from './pages/index'
import Layout from './component/Layout/Layout'
import Detail from './pages/Detail/Detail'

function App() {

  return (
    <>
      <Layout>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/course' element={<Courses />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path='/about' element={<About />} />
            <Route path='/create' element={<Create />} />
            <Route path='/donate' element={<Donate />} />
          </Routes>
        </main>
      </Layout>
    </>

  )
}

export default App
