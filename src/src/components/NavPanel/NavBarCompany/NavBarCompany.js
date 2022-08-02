import { Link } from 'react-router-dom'
import React from 'react';
import styles from './NavBarCompany.module.css'
import {useDispatch} from 'react-redux'
import {logout} from '../../../redux/vacanciesSlice'

function NavBarCompany() {
    const dispatch = useDispatch();
    return (
      <div>
        <nav className={styles.navbar}>
            <div className={styles.navbar_upper}>
                <Link to="/vacancies" className={styles.navbar_item}>
                    <img src={'./img/vacancies.svg'} alt="" width={50} height={50}/>
                    <span>Vacancies</span>
                </Link>
                <Link to="/active-vacancies" className={styles.navbar_item}>
                    <img src={'./img/vacanciesID.svg'} alt="" width={50} height={50}/>
                    <span>My vacancies</span>
                </Link>
                <Link to="/create-vacancy" className={styles.navbar_item}>
                    <img src={'./img/newvac.svg'} alt="" width={50} height={50}/>
                    <span>Create vacancy</span>
                </Link>
            </div>
            <div>
                <Link to="/login" className={styles.navbar_item} onClick={() => {
                    dispatch(logout());
                }}>
                    <img src={'./img/vac2.svg'} alt="" width={50} height={50}/>
                    <span>Logout</span>
                </Link>
            </div>
        </nav>
      </div>
  );
}

export default NavBarCompany;