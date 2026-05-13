import React from 'react';
import Form from '@/components/form/Form.jsx';
import {Link} from "react-router-dom";
import InputValues from "@/components/inputValues/InputValues.jsx";
import InputImage from "@/components/inputImage/InputImage.jsx";
import { setMovie } from '@/utils/api.js';

export default function Create(props) {
    async function submit(movie){
        for(let data in movie){
            if( movie[data] === '' ||
                movie[data] === null ||
                movie[data] === undefined
            ){
                // aparacer o alerta
                return false;
            }
        }
        const res = await setMovie(movie)
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
                    nome: '',
                    genero: '',
                    ano: '',
                    imagem: null
                }}
                submitPlaceHolder='Adicionar'
            >

                <InputValues
                    field='nome'
                    placeholder='Nome'
                />

                <InputValues
                    field='genero'
                    placeholder='Genero'
                />

                <InputValues
                    field='ano'
                    placeholder='Ano'
                />

                <InputImage
                    field='imagem'
                />

            </Form>

        </main>

    )

};
