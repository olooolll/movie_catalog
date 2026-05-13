import React, {useEffect, useState} from 'react';
import { getMovies } from '@/utils/api.js'
import {Link} from "react-router-dom";
import NavLink from "@/components/navLink/NavLink.jsx";


export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const movies = await getMovies();
            console.log(movies);
            if (movies.status === 200){
                setMovies(movies.data);
            }
        }

        loadMovies();
    },[])


    return (
        <main>
            <NavLink pages={[
                {path: '/criar', label: 'Criar'},
                {path: '/alterar', label: 'Alterar'},
                {path: '/deletar', label: 'Deletar'}
            ]}/>

            {movies.map((movie, index) => (
                <div key={index}>
                    <img src={movie.imagem} alt={movie.title}/>
                    <p>{movie.nome}</p>
                    <p>{movie.genero}</p>
                    <p>{movie.ano}</p>
                </div>
            ))}
        </main>
    )
}