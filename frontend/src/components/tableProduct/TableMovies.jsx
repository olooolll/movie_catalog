import {getMovies} from '@/utils/api.js';
import { useState,useEffect } from 'react';
import './TableMovies.css'

export default function TableMovies(props) {
    const [movies, setMovies] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        props.isLoading(true);
        async function loadMovies() {
            const res = await getMovies();
            if (res.status === 200) {
                props.isLoading(false);

                setMovies(res.data);

                if (res.data.length > 0) {
                    const keys = Object.keys(res.data[0]);
                    keys.push(props.header)
                    setColumns(keys);
                }
            }
        }
        loadMovies();
    }, []);


    return (
        <table className="cine-table">
            <thead>
                <tr>
                    {columns.map((colName, index) => (
                        <th key={index}>{colName}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {movies.map((movie, index) => (
                    <tr key={index} id={movie.id}>
                        {columns.map((colName, index) => (
                            <td key={index}>
                                {colName === 'imagem' ? (
                                    <img src={movie[colName]} alt="movie" width="50" />

                                ) : colName === props.header ? (
                                    <button onClick={() => props.selectMovie(movie.id)}>{props.body}</button>

                                ) : (movie[colName])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>

        </table>
    )
}
