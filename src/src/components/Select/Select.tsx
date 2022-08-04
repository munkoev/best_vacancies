import React, {useState} from 'react'
import styles from './Select.module.css'

interface ISelectProps<Type> {
    arr: Type[],
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    label: string,
    id: string,
    default?: string
}

function Select(props: ISelectProps<string>) {
    const [val, setVal] = useState('select');

    function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        props.onChange(e);
        if (e.target) {
            setVal((e.target as HTMLSelectElement).value)
        }
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
