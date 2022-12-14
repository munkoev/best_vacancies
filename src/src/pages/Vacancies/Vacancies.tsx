import React from 'react';
import styles from './Vacancies.module.css'
import VacancyList from '../../components/VacancyList/VacancyList'
import { Route, Routes } from 'react-router-dom';
import VacancyPage from '../VacancyPage/VacancyPage';
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/storage'

function Vacancies() {
  const role = useSelector((state: IRootState) => state.combined.users.current).slice(0,1)
  const is_logged = useSelector((state: IRootState) => state.combined.users.current) !== '';
  return is_logged
  ? (
      <div className={styles.vac}>
        <VacancyList filter={false} role={'user'}/>
        <Routes>
          <Route path=":id" element={<VacancyPage role={role} filtered={false}/>}/>
        </Routes>
      </div>
    )
  : <div></div>
}

export default Vacancies;