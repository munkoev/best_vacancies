import React, {useState} from 'react'
import styles from './Select.module.css'

function Select(props) {
    const [val, setVal] = useState('select');

    function onChangeHandler(e) {
        props.onChange(e);
        setVal(e.target.value)
    }

    return (
        <div className={styles.field}>
            <p>{props.label}</p>
            <select onChange={e => onChangeHandler(e)} id={props.id} placeholder={' '} value={val}>
                <option disabled>select</option>
                {
                    props.arr.map(e => {
                        return <option value={e} key={e}>{e}</option>;
                    })
                }
            </select>
        </div>
    )
}

export default Select;