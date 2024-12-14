import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src="src/assets/logo.webp" className="logo_project_pss" alt="project_PSS_logo" />
      <h1>Welcome to Project_PSS</h1>
      <h2 className="read-the-docs">
        We are still Building the Page, Please come back later.
      </h2>
    </>
  )
}
export default App