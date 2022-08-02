import React from "react";
import NavBar from './NavBar/NavBar'
import NavBarCompany from './NavBarCompany/NavBarCompany'
import { useSelector } from 'react-redux'

function NavPanel() {
    const role = useSelector(state => {
      return state.combined.users.current.slice(0, 1);
    });
    return (<div>
      {role === 'u' ? <div className="br"><NavBar /></div> : <div></div>}
      {role === 'c' ? <div className="br"><NavBarCompany /></div> : <div></div>}
    </div>)
  }

  export default NavPanel;