import React, { useEffect, useState } from "react"; // Importado useState para guardar o filme
import {useNavigate, useParams} from "react-router-dom";
import { getMovie } from "@/utils/api.js";
import './Movie.css'
import NavLink from '@/components/navLink/NavLink.jsx'

export default function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function loadMovie() {
            try {
                const res = await getMovie(id);

                if (res.status === 200) {
                    setMovie(res.data);
                } else {
                    navigate('*');
                }

            } catch (err) {
                console.error(err);
                navigate('*');
            }
        }

        loadMovie();
    }, []);

    if (!movie) {
        return (
            <section className='home-header'>
                <p className="retro-subtitle">"Eu vou trocar."</p>
                <br/>
                <div className="cine-modal-screen cine-screen">
                    <img
                        src="https://media.tenor.com/n4pD-Nh4lIEAAAAM/harrison-ford-king-tut.gif"
                    />
                </div>
            </section>

        );
    }

    return (
        <>
            <NavLink pages={[
                {path: '/', label: 'Inicio'}
            ]}/>

            <main className="cine-main-container">
                <article className="featured-movie-section">

                    {/* Lado Esquerdo: O Pôster (A grande estrela visual) */}
                    {movie.imagem && (
                        <div className="movie-main-screen">
                            <img src={movie.imagem} alt={movie.nome} className="movie-main-poster"/>
                        </div>
                    )}

                    {/* Lado Direito: Os Detalhes do Filme */}
                    <div className="movie-main-details">
                        <span className="movie-eyebrow">Em Cartaz / Destaque Principal</span>
                        <h1 className="movie-main-title">{movie.nome}</h1>

                        <div className="movie-info-badge-group">
                            <p className="movie-main-info">Gênero: <span>{movie.genero}</span></p>
                            <p className="movie-main-info">Ano de Lançamento: <span>{movie.ano}</span></p>
                        </div>
                    </div>

                </article>
            </main>
        </>
    );
}