import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { AuthProvider } from './utils/AuthContext'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProtectRoute from './utils/ProtectRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      </AuthProvider>
    </>
  )
}

export default App
