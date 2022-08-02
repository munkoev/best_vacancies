import React from 'react'
import InputField from '../../components/InputField/InputField'
import styles from './Signup.module.css'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {add_user} from '../../redux/vacanciesSlice'

function Signup() {
    const state = useSelector(state => state)
    const input = {
        name: undefined,
        password: undefined,
        repeat: undefined,
        id: 'u' + (state.combined.users.data.length + 1)
    }
    const dispatch = useDispatch();

    return (
    <div className={styles.form}>
        <InputField label="username" id="signup_login" onChange={e => {
                input.name = e.target.value;
            }}/>
        <InputField label="password" id="signup_password" onChange={e => {
                input.password = e.target.value;
            }}/>
        <InputField label="repeat password" id="signup_password-repeat" onChange={e => {
                input.repeat = e.target.value;
            }}/>
        <p>Already registered? <Link to={'/login'}>Sign in</Link></p>
        <button onClick={()=> {
            if (input.password === input.repeat) {
                dispatch(add_user(input))
                resetFields();
                alert('new user created')
            } else {
                alert('passwords dont match')
            }
        }}>Sign up</button>
    </div>
    )
}

function resetFields() {
    document.getElementById('signup_login').value = ''
    document.getElementById('signup_password').value = ''
    document.getElementById('signup_password-repeat').value = ''
}

export default Signup;