import React, { useState } from 'react';
import NavLink from '@/components/navLink/NavLink.jsx'
import TableMovies from "@/components/tableProduct/TableMovies.jsx";
import AlterData from "@/components/alterData/AlterData.jsx";
import {getMovie, setMovie, updateMovie} from '@/utils/api.js';

export default function Alter() {
    const [movieSelected, setMovieSelected] = useState(null);

    async function selectMovie(id){
        const res = await getMovie(id);
        setMovieSelected(res.data);
    }


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
        const res = await updateMovie(movie)
    };

    return (
        <>
            <NavLink pages={[
                {path: '/', label: 'Inicio'},
                {path: '/criar', label: 'Criar'},
                {path: '/deletar', label: 'Deletar'}
            ]}/>

            <main>

                {movieSelected &&
                    <AlterData
                        submit={submit}
                        movie={movieSelected}
                    />
                }

                <TableMovies
                    header='Opção'
                    body='Alterar'
                    selectMovie={selectMovie}
                />

            </main>
        </>
    )
}