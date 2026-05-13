import React, {useState} from 'react';

export default function InputValues(props) {
    const [value, setValue] = useState('');
    const onChange = e => {
        setValue(e.target.value);
    }

    return (
        <input
            placeholder={props.placeholder}
            onChange={onChange}
            value={props.value}
        >

        </input>

    )
}