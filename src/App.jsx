import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Pfooter from './components/projects/Pfooter'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Home />
        </div>
      )
    },
    {
      path: "/about",
      element: (
        <div>
          <Header />
          <About />
        </div>
      )
    },
    {
      path: "/contact",
      element: (
        <div>
          <Header />
          <Contact />
        </div>
      )
    },
    {
      path: "/projects",
      element: (
        <div>
          <Header/>
          <Projects/>
          <Pfooter/>
        </div>
      )
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
