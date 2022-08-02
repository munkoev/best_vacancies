import './App.css';
import Router from './router/Router'
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import NavBarCompany from './components/NavBarCompany/NavBarCompany';
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Doutes() {
  const role = useSelector(state => {
    console.log(state)
    return state.combined.users.current.slice(0, 1);
  });
  return (<div>
    {role === 'u' ? <div className="br"><NavBar /></div> : <div></div>}
    {role === 'c' ? <div className="br"><NavBarCompany /></div> : <div></div>}
  </div>)
}

function App() {

  return (
    <div className="App">
        <BrowserRouter >
          <Doutes />
          <main>
            <Router />
          </main>
        </BrowserRouter>

    </div>
  );
}

export default App;
