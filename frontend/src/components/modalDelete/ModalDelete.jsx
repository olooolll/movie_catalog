import React, { useEffect, useRef } from 'react';
import './ModalDelete.css';

export default function ModalDelete(props) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    function closeModal() {
        props.status(false);
    }

    return (
        <dialog ref={dialogRef} className="Modal">
            {/* Botão de fechar no estilo do botão 'Rebobinar' da sua 404 */}
            <button className='closeMarqueeButton' onClick={() => closeModal()}>
                &#x25C0;&#x25C0; CANCELAR
            </button>

            <div className="modal-content-wrapper">
                <p className="delete-warning">
                    DESEJA REALMENTE DELETAR O FILME:
                </p>

                {/* Título com o efeito Glitch da página 404 */}
                <h2 className="glitch-title" data-text={`"${props.data.nome}"`}>
                    "{props.data.nome}"
                </h2>

                {/* Container do GIF Cômico emoldurado como TV/Cinema */}
                <div className="gif-screen-container">
                    <img
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2F0cnZ4Z216bXN5Y293Y295MXB3dndtc3RnbmN6Y3M0ZndpZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hEc4k5pN17GZq/giphy.gif"
                        alt="GIF Cômico Drama"
                    />
                </div>
            </div>

            <button className="confirm-delete-btn" onClick={() => props.isConfirmed(props.data.id)}>
                CONFIRMAR DELEÇÃO
            </button>
        </dialog>
    );
}