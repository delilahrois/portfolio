import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Welcome from './components/Welcome/Welcome';

const App = () => {

  const [page, setPage] = useState(<Welcome />);

  const loadingElement = () => {
  
    setTimeout(() => {
      setPage(<Home/>)
    }, 2000)

  }

  useEffect(() => {
    loadingElement()
  }, [])


  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="/" element={page}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
