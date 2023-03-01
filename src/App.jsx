import { Routes, Route } from 'react-router-dom'
import { Home, Courses, About, Donate, Dashboard, Gracias, Player } from './pages/index'
import AuthGuard from './guards/authGuard'
import Layout from './component/Layout/Layout'
import Detail from './pages/Detail/Detail'
import { useAuth0 } from '@auth0/auth0-react';
import {  ProSidebarProvider} from "react-pro-sidebar";
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
            <Route path='/about' element={<About />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/gracias' element={<Gracias />} />            
              <Route path='/player' element={
                <ProSidebarProvider>
                  <Player />
                </ProSidebarProvider>
              } />            
            {/*<Route path='/login' element={<Login/>} />*/}
            <Route element={<AuthGuard />}>
              <Route path='/dashboard/*' element={<Dashboard />} />
            </Route>

          </Routes>
        </main>
      </Layout>
    </>

  )
}

export default App
