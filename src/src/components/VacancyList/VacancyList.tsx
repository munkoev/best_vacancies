import React from 'react';
import styles from './VacancyList.module.css'
import {useSelector} from 'react-redux'
import VacancyListItem from '../VacancyListItem/VacancyListItem'
import { IRootState } from '../../redux/storage'

interface IVacancyListProps {
  role: string,
  filter: boolean
}

function VacancyList(props: IVacancyListProps) {
   const arr = useSelector((state: IRootState) => {
    const filtered = props.role === 'company'
      ? [...state.combined.vacancies].filter(e => {
        return e.owner === state.combined.users.current;
      })
      : [...state.combined.vacancies].filter(e => {
        return e.users.includes(state.combined.users.current);
      })
  if (props.filter) {
    return filtered;
  } else {
    return state.combined.vacancies.filter(e => !e.closed)
  }
  });

    return (
      <div className={styles.wrapper + ' ' + styles.noselect}>
        <div className={styles.vac_list}>
          {arr
          .map((e) => {
            return (<VacancyListItem
              title={e.title}
              desc={
                e.description.split(' ').slice(0, 49).join(' ') + '...'
              }
              id={e.id}
              key={e.id}
              role={props.role}
            />)
          })}
        </div>
      </div>
  );
}

export default VacancyList;