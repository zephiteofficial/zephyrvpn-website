
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Nav from './components/nav';
import About from './pages/about';
import Plans from './pages/plans';
import Contact from './pages/contact';



function App() {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App;