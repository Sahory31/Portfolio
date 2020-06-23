import React from 'react';
import 'bootswatch/dist/sketchy/bootstrap.min.css'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CoverPage from './components/header.js';
import NavBar from './components/navBar.js';
import About from './components/about.js';
import Projects from './components/projects';


function App() {
    return (
      <div>
      <NavBar />
      <CoverPage />
      <About />
      <Projects/>
      </div>
    );
}
  
export default App;
