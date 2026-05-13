import react, {useEffect, useState} from 'react';
import { getMovies } from '@/utils/api.js'
import {Link} from "react-router-dom";


export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const movies = await getMovies();
            if (movies.status === 200){
                setMovies(movies.data);
            }
        }

        loadMovies();
    },[])


    return (
        <main>
            <nav>

                <Link to={'/criar'}>
                    <button>Adicionar</button>
                </Link>
                <Link to={'/alterar'}>
                    <button>Alterar</button>
                </Link>
                <Link to={'/deletar'}>
                    <button>Deletar</button>
                </Link>

            </nav>

            {movies.map((movie, index) => (
                <div key={index}>
                    <img src={movie.image} alt={movie.title}/>
                    <p>{movie.name}</p>
                    <p>{movie.genre}</p>
                    <p>{movie.yer}</p>
                </div>
            ))}
        </main>
    )
}