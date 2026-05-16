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
                {path: '/', label: 'Inicio'},
                {path: '/criar', label: 'Criar'},
                {path: '/alterar', label: 'Alterar'},
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
                    (
                        <section className='home-header'>
                            <p className="retro-subtitle">"Você não precisa ver a identificação dele." <br/> "Estes não são os droides que você está procurando."</p>
                        <div className="cine-modal-screen cine-screen">
                            <img
                                src="https://media1.tenor.com/m/_d97b4Dz3moAAAAC/you-will-watch-the-clone-wars-series.gif"
                            />
                        </div>
                        </section>
                    )
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