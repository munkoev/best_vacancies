import React from "react";
import InputField from "../../components/InputField/InputField";
import Select from "../../components/Select/Select";
import styles from './CreateVacancy.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {add_vacancy} from '../../redux/vacanciesSlice'

function CreateVacancy() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const curr = {
        title: "",
        description: "",
        id: state.combined.vacancies.length + 1,
        closed: false,
        english_lvl: "",
        grade: "",
        tags: '',
        users: [],
        owner: state.combined.users.current
    }
    const is_logged = state.combined.users.current !== '';
    return is_logged
    ? (
        <div className={styles.wrapper}>
            <InputField label="Vacancy title" onChange={e => {
                curr.title = e.target.value;
            }} id="vac_title"/>
            <div className={styles.texta}>
                <p>Vacancy description</p>
                <textarea onChange={e => {
                curr.description = e.target.value;
            }} id="vac_desc"></textarea>
            </div>
            <Select label="English" arr={['A', 'B', 'C']} onChange={e => {
                curr.english_lvl = e.target.value;
            }} id="vac_eng" default='A'></Select>
            <Select label="Grade" arr={['L1', 'L2', 'L3']} onChange={e => {
                curr.grade = e.target.options[e.target.selectedIndex].text;
            }} id="vac_grade"></Select>
            <InputField label="Tags, comma sep." id="vac_tags" onChange={e => {
                curr.tags = e.target.value;
            }}/>
            <div className={styles.btns}>
                <button>Close</button>
                <button onClick={()=> {
                    console.log(curr)
                    curr.tags = curr.tags.split(',');
                    dispatch(add_vacancy(curr))
                    resetFields();
                }}> Save</button>
            </div>
        </div>
        )
    : <div></div>
}

function resetFields() {
    document.getElementById('vac_title').value = ''
    document.getElementById('vac_desc').value = ''
    document.getElementById('vac_eng').value = ''
    document.getElementById('vac_grade').value = ''
    document.getElementById('vac_tags').value = ''
}

export default CreateVacancy;