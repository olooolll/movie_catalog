import { deleteMovie } from '@/utils/api.js';
import NavLink from '@/components/navLink/NavLink.jsx';
import TableMovies from '@/components/tableProduct/TableMovies.jsx';
import {useState} from "react";

export default function Delete() {
    const [movies, setMovies] = useState([]);

    async function selectMovie(id){
        const res = await deleteMovie(id);
        if(res.status === 204){
            setMovies(movies.filter(movie => movie.id !== id))
            document.getElementById(id).remove();
        } else{
            //Alert
        }
    }
    return (
        <>
            <NavLink pages={[
                {path: '/criar', label: 'Criar'},
                {path: '/alterar', label: 'Alterar'},
                {path: '/', label: 'Inicio'}
            ]}/>

            <main>

                <TableMovies
                    header='Opção'
                    body='Deletar'
                    selectMovie={selectMovie}
                    data={movies}
                    />

            </main>
        </>
    );
}