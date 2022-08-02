import React from 'react'
import styles from './InputField.module.css'

function InputField(props) {

    return (
        <div className={styles.field}>
            <p>{props.label}</p>
            <input onChange={props.onChange} id={props.id}></input>
        </div>
    )
}

export default InputField;