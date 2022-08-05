import React from "react";
import NavBar from './NavBar/NavBar'
import NavBarCompany from './NavBarCompany/NavBarCompany'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/storage'
import styles from './NavPanel.module.css'

function NavPanel() {
    const role = useSelector((state: IRootState) => {
      return state.combined.users.current.slice(0, 1);
    });
    return (<div>
      {role === 'u' ? <div className={styles.br}><NavBar /></div> : <div></div>}
      {role === 'c' ? <div className={styles.br}><NavBarCompany /></div> : <div></div>}
    </div>)
  }

  export default NavPanel;