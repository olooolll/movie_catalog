import React, { useEffect, useState } from 'react';
import { getMovies } from '@/utils/api.js';
import NavLink from "@/components/navLink/NavLink.jsx";
import './Home.css';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {
            try {
                const response = await getMovies();

                if (response.status === 200) {
                    setMovies(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Erro ao carregar filmes:', error);
            }
        }

        loadMovies();
    }, []);

    return (
        <>
            <NavLink
                pages={[
                    { path: '/criar', label: 'Criar' },
                    { path: '/alterar', label: 'Alterar' },
                    { path: '/deletar', label: 'Deletar' }
                ]}
            />

            <main className="home-container container py-5">

                <div className="home-header">
                    <h1 className="retro-title">Cine Retrô</h1>
                    <p className="retro-subtitle">Selecione um título para começar</p>
                </div>

                {
                    loading ?
                        (
                            <div className="cine-modal-screen cine-screen">
                                <img
                                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2F0cnZ4Z216bXN5Y293Y295MXB3dndtc3RnbmN6Y3M0ZndpZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hEc4k5pN17GZq/giphy.gif"
                                />
                            </div>
                        ) : (

                            <section className="movie-grid">
                                {movies.map((movie, index) => (
                                    <article key={index} className="movie-card">
                                        <div className="poster-wrapper">
                                            <img src={movie.imagem} alt={movie.nome} />
                                            <div className="badge-year">{movie.ano}</div>
                                        </div>
                                        <div className="movie-info">
                                            <h3>{movie.nome}</h3>
                                            <span>{movie.genero}</span>
                                        </div>
                                    </article>
                                ))}
                            </section>

                        )
                }


            </main>
        </>
    );
}