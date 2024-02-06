import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Qualification from './components/Qualification'
import Experience from './components/Experience'
import Navigation from './navcomponents/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Qualification />
      <Experience />



    </>
  )
}

export default App
