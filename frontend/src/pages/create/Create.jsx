import React from 'react';
import Form from '@/components/form/Form.jsx';
import {Link} from "react-router-dom";
import InputValues from "@/components/inputValues/InputValues.jsx";

export default function Create(props) {
    const submit = (data) => {

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
                initialState={{
                    name: '',
                    gerne: '',
                    yer: ''
                }}
            >
                <InputValues
                    field='name'
                    placeholder='Nome'
                />
                <InputValues
                    field='gerne'
                    placeholder='Genero'
                />
                <InputValues
                    field='yer'
                    placeholder='Ano'
                />

            </Form>

        </main>

    )

};