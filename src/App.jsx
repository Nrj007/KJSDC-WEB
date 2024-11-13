import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { LandingPage } from './components/LandingPage'
import { Vision } from './components/Vision'
import { Workflow } from './components/Workflow'
import { Technologies } from './components/Technologies'
import { Consultancy } from './components/Consultancy'
import { Team } from './components/Team'
import { Projects } from './components/Projects'
import { Threed } from './components/Threed'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar></Navbar>
  <LandingPage></LandingPage>
  <Vision></Vision>

  <Workflow></Workflow>
  <Technologies></Technologies>
  <Consultancy></Consultancy>
  <Projects></Projects>

  <Team></Team>

    </>
  )
}

export default App
