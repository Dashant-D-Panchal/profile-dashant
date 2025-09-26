import React from 'react';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
