import React, { useState } from 'react';
import './Form.css'

export default function Form(props) {
    const [form, setForm] = useState(props.states)

    const onAlter = (key, value) => {
        setForm(...prev => ({
            ...prev,
            [key]: value
            })
        )
    }

    return(
        <form onSubmit=''>
            {props.children}
            <button type='submit'>{props.submitPlaceHolder}</button>
        </form>
    );

}