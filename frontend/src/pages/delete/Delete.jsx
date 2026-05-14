import { deleteMovie } from '@/utils/api.js';
import NavLink from '@/components/navLink/NavLink.jsx';
import TableMovies, { setMovies } from '@/components/tableProduct/TableMovies.jsx';

export default function Delete() {
    async function selectMovie(id){
        const res = await deleteMovie(id);
        if(res.status === 204){
            setMovies(movies.filter(movie => movie.id !== id))
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
                    />

            </main>
        </>
    );
}