import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Enter from './components/Enter/Enter';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Welcome from './components/Welcome/Welcome';

const App = () => {

  // const [page, setPage] = useState(<Welcome />);

  // const loadingElement = () => {
  
  //   setTimeout(() => {
  //     setPage(<Enter/>)
  //   }, 4000)

  // }

  // useEffect(() => {
  //   loadingElement()
  // }, [])


  return (
    <div className="app">
      <Routes>
        {/* <Route path="/" element={<Enter/>}></Route> */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
