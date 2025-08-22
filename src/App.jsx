// src/App.jsx
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import{ Route, Routes} from 'react-router'
import React from 'react';
import SignUpForm from './components/SignUpForm/SignUpForm'
const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  );
};

export default App;

