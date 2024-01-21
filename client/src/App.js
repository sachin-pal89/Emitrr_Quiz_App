import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import React, { useState } from 'react';

function App() {

  const [user, setUser] = useState(() => {
    // Try to get user data from localStorage
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : {};
  });

  const handleUser = (data) => {
    setUser(data);

    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(data));
  };
  
  const [quiz, setQuiz] = useState(() => {
    // Try to get quiz data from localStorage
    const storedQuizData = localStorage.getItem('quiz');
    return storedQuizData ? JSON.parse(storedQuizData) : {};
  });

  const handleQuizData = (data) => {
    setQuiz(data);

    // Save Quiz data to localStorage
    localStorage.setItem('quiz', JSON.stringify(data));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login handleUser={handleUser} />} />
        <Route path='/signup' element={<SignUp handleUser={handleUser} />} />
        <Route path='/dashboard' element={<Dashboard user={user} quiz={quiz} handleQuizData={handleQuizData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
