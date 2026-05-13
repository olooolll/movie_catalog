import {Router, useNavigate} from "react-router-dom";
import React from 'react';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <main>
            <h1>Essa página não foi encontrada</h1>

            <img src='src/assets/img/sadMask.png'/>

            <button onClick={() => navigate('/')}>
                Voltar ao início
            </button>
        </main>

    )
}