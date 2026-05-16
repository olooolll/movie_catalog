import { useState, Children, cloneElement } from 'react';

export default function Form(props) {
    const [form, setForm] = useState(props.initialState);

    const onAlter = (key, value) => {
        setForm(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(form);
        setForm(props.initialState)
    };

    return (
        <form className="cine-form" onSubmit={handleSubmit}>

            {
                Children.map(props.children, child => {
                    return cloneElement(child, {
                        value: form[child.props.field] || '',
                        onAlter: onAlter
                    });
                })
            }

            <button className="cine-submit-button" type='submit'>
                {props.submitPlaceHolder}
            </button>

        </form>
    );
}
