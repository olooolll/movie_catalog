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
                {path: '/', label: 'Inicio'},
                {path: '/alterar', label: 'Alterar'},
                {path: '/deletar', label: 'Deletar'}
            ]}/>

            <main>

                <div className="cine-modal-screen cine-screen">
                    <img
                        src="https://media.tenor.com/W5SYj30r3JkAAAAM/american-psycho.gif"
                    />
                </div>

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
