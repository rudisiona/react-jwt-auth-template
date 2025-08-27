import { useState, useContext } from 'react'
import {Route, Routes} from 'react-router'
import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm'
import SignInForm from './components/SignInForm/SignInForm'

import { UserContext } from './contexts/UserContext'
import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'

function App() {
  const { user } = useContext(UserContext)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={ user ? <Dashboard /> : <Landing /> } />
        <Route path="/sign-up" element={<SignUpForm /> } />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </>
  )
}

export default App

