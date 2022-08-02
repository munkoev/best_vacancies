import './App.css';
import Router from './router/Router'
import React from 'react';
import NavPanel from './components/NavPanel/NavPanel'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <div className="App">
        <BrowserRouter >
          <NavPanel />
          <main>
            <Router />
          </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
