import React from 'react';
import { useSelector } from 'react-redux';
import styles from './VacancyListItem.module.css'
import { useNavigate } from 'react-router-dom'
import { IRootState } from '../../redux/storage'

interface IVacancyListItemProps {
  role: string,
  id: number,
  title: string,
  desc: string
}

function VacancyListItem(props: IVacancyListItemProps) {
    const navigate = useNavigate();
    const url = window.location.pathname.split('/').slice(0,2).join('/');
    const state = useSelector((state: IRootState) => state);
    return (
      <div className={styles.item} onClick={() => {
        if (window.location.pathname !== `${url}/${props.id}`) {
          navigate(`${url}/${props.id}`)
        } else {
          navigate(`${url}`)
        }
      }}>
        <div className={styles.container}>
          <div><p className={styles.title}>{props.title}</p></div>
          {(props.role === 'user') ?
          (state.combined.vacancies
            .find(e => Number(e.id) === Number(props.id))
            ?.users.includes(state.combined.users.current)
            ? <div><p className={styles.responded}>You responded</p></div>
            : <div></div>) :
            <div>applicants: <b>{state.combined.vacancies[props.id-1].users.length}</b></div>
          }
        </div>
        <p className={styles.desc}>{props.desc}</p>
      </div>
  );
}

export default VacancyListItem;