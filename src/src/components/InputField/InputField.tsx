import React from 'react'
import styles from './InputField.module.css'

interface IInputFieldProps {
    label: string,
    id: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

function InputField(props: IInputFieldProps) {

    return (
        <div className={styles.field}>
            <p>{props.label}</p>
            <input onChange={props.onChange} id={props.id}></input>
        </div>
    )
}

export default InputField;