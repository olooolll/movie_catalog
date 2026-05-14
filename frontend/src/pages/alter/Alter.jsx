import React from 'react';
import NavLink from '@/components/navLink/NavLink.jsx'
import TableMovies from "@/components/tableProduct/TableMovies.jsx";

export default function Alter() {
    const updateMovie = (movie) => {console.log(movie)};

    return (
        <>
            <NavLink pages={[
                {path: '/', label: 'Inicio'},
                {path: '/criar', label: 'Criar'},
                {path: '/deletar', label: 'Deletar'}
            ]}/>

            <main>

                <TableMovies
                    header='Opção'
                    body='Alterar'
                    selectMovie={updateMovie}
                />

            </main>
        </>
    )
}