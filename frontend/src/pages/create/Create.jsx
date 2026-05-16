import React from 'react';
import Form from '@/components/form/Form.jsx';
import InputValues from "@/components/inputValues/InputValues.jsx";
import InputImage from "@/components/inputImage/InputImage.jsx";
import { setMovie } from '@/utils/api.js';
import NavLink from "@/components/navLink/NavLink.jsx";

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
        <>
            <NavLink pages={[
                {path: '/alterar', label: 'Alterar'},
                {path: '/deletar', label: 'Deletar'},
                {path: '/', label: 'Inicio'}
            ]}/>

            <main>

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
        </>

    )

};
