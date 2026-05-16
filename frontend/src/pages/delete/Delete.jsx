import {deleteMovie, getMovie} from '@/utils/api.js';
import NavLink from '@/components/navLink/NavLink.jsx';
import TableMovies from '@/components/tableProduct/TableMovies.jsx';
import {useState} from "react";
import ModalDelete from "@/components/modalDelete/ModalDelete.jsx";

export default function Delete() {
    const [modalOpen, setModalOpen] = useState(false);
    const [movie, setMovie] = useState({});

    async function selectMovie(id){
        setModalOpen(true);
        const res = await getMovie(id, false);
        if (res.status === 200){
            setMovie(res.data);
        }

        //const res = await deleteMovie(id);
        if(res.status === 204){
            //document.getElementById(id).remove();
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

                {modalOpen &&
                    <ModalDelete
                        status={setModalOpen}
                        data={movie}
                        isConfirmed={deleteMovie}
                    />
                }

                <TableMovies
                    header='Opção'
                    body='Deletar'
                    selectMovie={selectMovie}
                    />

            </main>
        </>
    );
}