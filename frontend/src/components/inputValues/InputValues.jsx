import React from 'react';

export default function InputValues(props) {

    return (
        <input
            type='text'
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) =>
                props.onAlter(props.field, e.target.value)
            }
        />
    );
}