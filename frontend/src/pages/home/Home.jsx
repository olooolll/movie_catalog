import React, { useEffect, useState } from 'react';
import { getMovies } from '@/utils/api.js';
import NavLink from "@/components/navLink/NavLink.jsx";
import './Home.css';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            try {
                const response = await getMovies();

                if (response.status === 200) {
                    setMovies(response.data);
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

                {/* Este container agora controla a grade de filmes */}
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
            </main>
        </>
    );
}