import { useState, useEffect } from 'react';
import { getMovies, deleteMovie } from "@/utils/api.js";

export default function Delete() {
    const [movies, setMovies] = useState([]);
    const [columns, setColumns] = useState([]); // Nome no plural é melhor

    useEffect(() => {
        async function loadMovies() {
            const res = await getMovies();
            if (res.status === 200) {
                setMovies(res.data);

                if (res.data.length > 0) {
                    const chaves = Object.keys(res.data[0]);
                    setColumns(chaves);
                }
            }
        }
        loadMovies();
    }, []);


    async function selectMovie(id){
        const res = await deleteMovie(id);
        if(res.status === 204){
            setMovies(movies.filter(movie => movie.id !== id))
        } else{
            //Alert
        }
    }

    return (
        <main>
            <table>
                <thead>
                <tr>
                    {columns.map((colName, index) => (
                        <th key={index}>{colName}</th>
                    ))}
                    <th>apagar</th>
                </tr>
                </thead>
                <tbody>
                {movies.map((movie, index) => (
                    <tr key={index} id={movie.id}>
                        {columns.map((colName, i) => (
                            <td key={i}>
                                {colName === 'imagem' ? (
                                    <img src={movie[colName]} alt="movie" width="50" />
                                ) : (
                                    movie[colName]
                                )}
                            </td>
                        ))}

                        <td>
                            <button onClick={() => selectMovie(movie.id)}>Deletar</button>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    );
}