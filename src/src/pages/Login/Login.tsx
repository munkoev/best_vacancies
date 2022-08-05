import React from 'react'
import InputField from '../../components/InputField/InputField'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/vacanciesSlice'

function Login() {
    const dispatch = useDispatch();
    const input = {
        user: "",
        password: ""
    }
    return (
    <div className={styles.form}>
        <InputField centered={true} label="Username" id="login" onChange={e => {
                input.user = e.target.value;
            }}/>
        <InputField centered={true} label="Password" id="password" type="password" onChange={e => {
                input.password = e.target.value;
            }}/>
        <p className={styles.centered}>New to BestVacancies?</p><p className={styles.centered}> <Link to={'/signup'}>Create an account</Link></p>
        <Link to="/vacancies" onClick={() => {
                dispatch(login(input));
            }}>
            <button className={styles.button}>Sign in</button>
        </Link>
    </div>
    )
}

export default Login;
