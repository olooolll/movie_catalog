import { useEffect, useRef } from 'react';
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
        <dialog ref={dialogRef} className="modal-delete cine-modal cine-modal--danger cine-dialog">
            <header className="cine-modal-header">
                <button className="cine-modal-close" onClick={() => closeModal()}>
                    &#x25C0;&#x25C0; CANCELAR
                </button>
            </header>

            <div className="cine-modal-body">
                <p className="cine-modal-eyebrow">
                    DESEJA REALMENTE DELETAR O FILME:
                </p>

                <h2 className="cine-modal-title" data-text={`"${props.data.nome}"`}>
                    "{props.data.nome}"
                </h2>

                <div className="cine-modal-screen cine-screen">
                    <img
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2F0cnZ4Z216bXN5Y293Y295MXB3dndtc3RnbmN6Y3M0ZndpZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hEc4k5pN17GZq/giphy.gif"
                    />
                </div>
            </div>

            <button className="cine-submit-button" onClick={() => props.isConfirmed(props.data.id)}>
                CONFIRMAR DELEÇÃO
            </button>
        </dialog>
    );
}
