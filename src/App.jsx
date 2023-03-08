import { Routes, Route } from 'react-router-dom'
import { Home, Courses, About, Donate, Dashboard, Gracias, Player, EditCourse } from './pages/index'
import AuthGuard from './guards/authGuard'
import Layout from './component/Layout/Layout'
import Detail from './pages/Detail/Detail'
import { useAuth0 } from '@auth0/auth0-react';
import {  ProSidebarProvider} from "react-pro-sidebar";
import DetailCard from './pages/Detail/DetailCard/DetailCard'
import AIProfessor from './pages/AIProfessor/AIProfessor'


//import Login from '../'

function App() {
  const { isAuthenticated, user } = useAuth0();
  if(isAuthenticated && user){
    localStorage.setItem("user", JSON.stringify(user))
  }

  return (
    <>
      <Layout>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<h2>Not Found</h2>} />
            <Route path='/course' element={<Courses />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/detail/:id" element={<DetailCard />} />
            <Route path='/about' element={<About />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/gracias' element={<Gracias />} /> 
            <Route path = "/player/:id" element ={<Player />}  />
            <Route path = "/pregunta" element ={<AIProfessor />} />        

              <Route path='/player' element={
                <ProSidebarProvider>
                  <Player />
                </ProSidebarProvider>
              } />            
            {/*<Route path='/login' element={<Login/>} />*/}
            <Route element={<AuthGuard />}>
              <Route path='/dashboard/*' element={<Dashboard />} />
              <Route path='/edit/detail/:id' element={<EditCourse />} />
            </Route>

          </Routes>
        </main>
      </Layout>
    </>

  )
}

export default App
