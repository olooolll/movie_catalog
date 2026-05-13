import React from 'react';
import Form from '@/components/Form/Form.jsx';
import {Link} from "react-router-dom";
import InputValues from "@/components/inputValues/InputValues.jsx";

export default function Create(props) {
    const submit = (e) => {
        e.preventDefault();
        console.log(e)
    }


    return (
        <main>
            <nav>
                <Link to={'/'}>
                    <button>Inicio</button>
                </Link>
                <Link to={'/alterar'}>
                    <button>Alterar</button>
                </Link>
                <Link to={'/deletar'}>
                    <button>Deletar</button>
                </Link>

            </nav>

            <Form
                onSubmit={submit}
                submitPlaceHolder='Adicionar'
                states={{
                    name: ''
                }}
            >
                <InputValues
                    placeholder='Nome'
                    onAlter={value => onAlter('name', value)}
                />
            </Form>

        </main>

    )

};