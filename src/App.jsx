import { Routes, Route } from 'react-router-dom'
import { Home, Courses, About, Donate, Create, Dashboard } from './pages/index'
import AuthGuard from './guards/authGuard'
import Layout from './component/Layout/Layout'
import Detail from './pages/Detail/Detail'
//import Login from '../'

function App() {

  return (
    <>
      <Layout>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<h2>Not Found</h2>}/>
            <Route path='/course' element={<Courses />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path='/about' element={<About />} />
            <Route path='/create' element={<Create />} />
            <Route path='/donate' element={<Donate />} />
<<<<<<< HEAD
            {/*<Route path='/login' element={<Login/>} />*/}
=======
            <Route element={<AuthGuard />}>
              <Route path='/dashboard/*' element={<Dashboard />} />
            </Route>
>>>>>>> b8a0f5eec6eadfdce576cb112f6d2764effab2dc
          </Routes>
        </main>
      </Layout>
    </>

  )
}

export default App
