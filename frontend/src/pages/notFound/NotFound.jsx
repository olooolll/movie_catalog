import { useNavigate } from "react-router-dom";
import './NotFund.css';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <main className="not-found-container">
            <h1 className="glitch-404">404</h1>
            <h2>Sessão Interrompida</h2>

            <div className="image-wrapper cine-screen">
                <img src='https://media1.tenor.com/m/5cs6EToUkcAAAAAd/the-godfather-film.gif' alt="Máscara Triste" />
            </div>

            <button className="btn-rewind" onClick={() => navigate('/')}>
                ◄◄ REBOBINAR PARA O INÍCIO
            </button>
        </main>
    )
}
