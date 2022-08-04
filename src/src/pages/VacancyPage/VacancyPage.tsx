import React from 'react';
import {useParams} from 'react-router-dom'
import styles from './VacancyPage.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { close_vacancy, response } from '../../redux/vacanciesSlice'
import { IRootState } from '../../redux/storage'

interface IVacancyPageProps {
  role?: string,
  filtered: boolean
}

function VacancyPage(props: IVacancyPageProps) {
    let { id } = useParams();
    const r = [...useSelector((state: IRootState) => state.combined.vacancies)].filter(e => Number(e.id) === Number(id));
    const dispatch = useDispatch();
    const is_logged = useSelector((state: IRootState) => state.combined.users.current) !== '';
    return is_logged
    ? (
      <div className={styles.vac}>
        <div className={styles.title}>
          <div><p>{r[0].title}</p></div>
          <div>{r[0].english_lvl}</div>
          <div>{r[0].grade}</div>
        </div>
        {r[0].closed ? <p className={styles.closed}>closed</p> : <p></p>}
        <p className={styles.p}>{r[0].description}</p>
        <div>Contacts</div>
        <div className={styles.contacts}>
          {r[0].tags.map((e, i) => <div key={i}>{e}</div>)}
        </div>
        {(props.role === 'c')
          ? props.filtered === true ? <button onClick={()=> {
            dispatch(close_vacancy(id))
          }}>close vac</button> : <div></div>
          : props.filtered === false ? <button onClick={() => {
            dispatch(response(id))
          }}>response</button> : <div></div>
        }
        
      </div>
      )
    : <div></div>
}

export default VacancyPage;