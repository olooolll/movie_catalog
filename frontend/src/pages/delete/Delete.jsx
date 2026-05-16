import {deleteMovie, getMovie} from '@/utils/api.js';
import NavLink from '@/components/navLink/NavLink.jsx';
import TableMovies from '@/components/tableProduct/TableMovies.jsx';
import React, {useState} from "react";
import ModalDelete from "@/components/modalDelete/ModalDelete.jsx";

export default function Delete() {
    const [modalOpen, setModalOpen] = useState(false);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);

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

                {loading &&
                    (<div className="cine-modal-screen cine-screen">
                        <img
                            src="https://media1.tenor.com/m/bv2FLcMKT6MAAAAC/look-out-window-tired.gif"
                        />
                    </div>)
                }

                <TableMovies
                    header='Opção'
                    body='Deletar'
                    selectMovie={selectMovie}
                    isLoading={setLoading}
                    />

            </main>
        </>
    );
}