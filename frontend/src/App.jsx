import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import {Navigate, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
function App() {
  const {authUser}=useAuthContext()
  return (
    <div className='justify-center h-screen flex p-4 items-center'>
      <Routes>
      <Route path='/' element={authUser ? <Homepage /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <LoginPage />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignupPage />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
