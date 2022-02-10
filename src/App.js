import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const App = () => {


  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
