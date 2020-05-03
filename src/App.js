import React from 'react';
import photo from './perfil.jpg';
import './App.css';

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hola! Este es el Portfolio de Brenda</h1>
          <img src={photo}/>
        </header>
      </div>
    );
  }
  
  export default App;
