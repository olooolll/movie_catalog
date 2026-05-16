import {useEffect, useRef} from 'react';
import Form from '@/components/form/Form.jsx'
import InputValues from '@/components/inputValues/InputValues.jsx';
import InputImage from '@/components/inputImage/InputImage.jsx';
import './ModalAlter.css'

export default function ModalAlter(props) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    function closeModal() {
        props.status(false)
    }


    return (
        <dialog ref={dialogRef} className="modal-alter cine-modal cine-dialog">
            <header className="cine-modal-header">
                <button className="cine-modal-close" onClick={() => closeModal()}>
                    &#x25C0;&#x25C0; FECHAR
                </button>
            </header>

            <div className="cine-modal-body">
                <h2 className="cine-modal-title">
                    ALTERAR DADOS DO FILME
                </h2>

                <Form
                    onSubmit={props.submit}
                    initialState={{
                        id: props.movie.id,
                        nome: props.movie.nome,
                        genero: props.movie.genero,
                        ano: props.movie.ano,
                        imagem: props.movie.imagem
                    }}
                    submitPlaceHolder='Confirmar'
                >

                    <InputValues
                        field='nome'
                        placeholder='Nome'
                    />

                    <InputValues
                        field='genero'
                        placeholder='Genero'
                    />

                    <InputValues
                        field='ano'
                        placeholder='Ano'
                    />

                    <InputImage
                        field='imagem'
                    />

                </Form>
            </div>
        </dialog>
    )

}
