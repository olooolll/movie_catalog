import React, { useState } from 'react';
import NavLink from '@/components/navLink/NavLink.jsx'
import TableMovies from "@/components/tableProduct/TableMovies.jsx";
import ModalAlter from "@/components/modalAlter/ModalAlter.jsx";
import {getMovie, setMovie, updateMovie} from '@/utils/api.js';

export default function Alter() {
    const [movieSelected, setMovieSelected] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    async function selectMovie(id){
        const res = await getMovie(id, false);
        setMovieSelected(res.data);
        setModalOpen(true);
    }

    async function submit(movie){
        for(let data in movie){
            if(movie.imagem !== null){
                continue;
            }

            if( movie[data] === '' ||
                movie[data] === null ||
                movie[data] === undefined
            ){
                // aparacer o alerta
                return false;
            }
        }
        const res = await updateMovie(movie)
        setModalOpen(false);
    };

    return (
        <>
            <NavLink pages={[
                {path: '/', label: 'Inicio'},
                {path: '/criar', label: 'Criar'},
                {path: '/deletar', label: 'Deletar'}
            ]}/>

            <main>

                {modalOpen &&
                    <ModalAlter
                        status={setModalOpen}
                        submit={submit}
                        movie={movieSelected}
                    />
                }

                {!modalOpen &&
                    <TableMovies
                        header='Opção'
                        body='Alterar'
                        selectMovie={selectMovie}
                    />
                }

            </main>
        </>
    )
}