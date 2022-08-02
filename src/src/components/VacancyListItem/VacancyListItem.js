import React from 'react';
import { useSelector } from 'react-redux';
import styles from './VacancyListItem.module.css'
import { useNavigate } from 'react-router-dom'

function VacancyListItem(props) {
    const navigate = useNavigate();
    const url = window.location.pathname.split('/').slice(0,2).join('/');
    const state = useSelector(state => state);
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
            .users.includes(state.combined.users.current)
            ? <div><p className={styles.responded}>You responded</p></div>
            : <div></div>) :
            <div>{state.combined.vacancies[props.id-1].users.length}</div>
          }
        </div>
        <p>{props.desc}</p>
      </div>
  );
}

export default VacancyListItem;