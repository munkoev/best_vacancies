import React from 'react';
import styles from './MyVacancies.module.css'
import VacancyList from '../../components/VacancyList/VacancyList'
import { Route, Routes } from 'react-router-dom';
import VacancyPage from '../VacancyPage/VacancyPage';
import {useSelector} from 'react-redux'

function MyVacancies() {
  const is_logged = useSelector(state => state.combined.users.current) !== '';
  return is_logged
  ? (
      <div className={styles.vac}>
        <VacancyList filter={true} role={'user'}/>
        <Routes>
          <Route path=":id" element={<VacancyPage filtered={true}/>}/>
        </Routes>
      </div>
    )
  : <div></div>
}

export default MyVacancies;