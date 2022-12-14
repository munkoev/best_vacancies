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
        {r[0].closed ? <p className={styles.closed}>closed</p> : <p>actual</p>}
        <p className={styles.desc}>{r[0].description}</p>
        <p className={styles.tags}>Tags</p>
        <div className={styles.contacts}>
        <div className={styles.tags_wrapper}>
          {r[0].tags.map((e, i) => <div key={i} className={styles.tag}>{e}</div>)}
        </div>

        </div>
        {(props.role === 'c')
          ? props.filtered === true ? <button className={styles.btn} onClick={()=> {
            dispatch(close_vacancy(id))
          }}>close vac</button> : <div></div>
          : props.filtered === false ? <button className={styles.btn} onClick={() => {
            dispatch(response(id))
          }}>response</button> : <div></div>
        }
        
      </div>
      )
    : <div></div>
}

export default VacancyPage;