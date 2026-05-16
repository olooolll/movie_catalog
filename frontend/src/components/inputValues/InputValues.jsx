export default function InputValues(props) {
    return (
        <input
            className="retro-input" // Adicionado para melhor organização
            type='text'
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) =>
                props.onAlter(props.field, e.target.value)
            }
        />
    );
}
