import React from 'react'
import InputField from '../../components/InputField/InputField'
import styles from './CompanySignup.module.css'
import { Link } from 'react-router-dom'

function CompanySignup() {

    return (
        <div className={styles.form}>
            <InputField label="Company name" id="cname"/>
            <InputField label="login" id="login"/>
            <InputField label="password" id="password"/>
            <InputField label="repeat password" id="password-repeat"/>
            <p>Already registered? <Link to={'/login'}>Sign in</Link></p>
            <button>Sign up</button>
        </div>
        )
}

export default CompanySignup;