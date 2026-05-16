import React, { useState } from 'react';
import NavLink from '@/components/navLink/NavLink.jsx'
import TableMovies from "@/components/tableProduct/TableMovies.jsx";
import ModalAlter from "@/components/modalAlter/ModalAlter.jsx";
import {getMovie, setMovie, updateMovie} from '@/utils/api.js';

export default function Alter() {
    const [movieSelected, setMovieSelected] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

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
                {path: '/deletar', label: 'Deletar'},
                {path: '/', label: 'Inicio'},
                {path: '/criar', label: 'Criar'}
            ]}/>

            <main>

                {modalOpen &&
                    <ModalAlter
                        status={setModalOpen}
                        submit={submit}
                        movie={movieSelected}
                    />
                }

                {loading &&

                    (

                        <section className='home-header'>
                            <p className="retro-subtitle">"A solidão me seguiu por toda a minha vida. Em todos os lugares. Em bares, em carros, calçadas, lojas... em todos os lugares. Não há saída. Eu sou o homem solitário de Deus."</p>
                            <br/>
                            <div className="cine-modal-screen cine-screen">
                                <img
                                    src="https://media1.tenor.com/m/4BV0r_fdQBoAAAAd/travis-bickle-cinema.gif"
                                />
                            </div>
                        </section>
                        )
                }

                {!modalOpen &&
                    <TableMovies
                        header='Opção'
                        body='Alterar'
                        selectMovie={selectMovie}
                        isLoading={setLoading}
                    />
                }

            </main>
        </>
    )
}