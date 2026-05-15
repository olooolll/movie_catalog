import { useState } from 'react';
import './InputImage.css';

export default function InputImage(props) {
    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const buffer = reader.result;
            const bytes = new Uint8Array(buffer);
            const hex = Array.from(bytes)
                .map(byte => byte.toString(16).padStart(2, '0'))
                .join('');
            props.onAlter(props.field, hex);
        };
        reader.readAsArrayBuffer(file);
    }

    return (
        <div className="file-upload-wrapper">
            <label htmlFor="file-upload" className="custom-file-upload">
                <span className="icon">🎬</span> Selecionar Cartaz (PNG)
            </label>
            <input
                id="file-upload"
                type="file"
                accept="image/png"
                onChange={handleImage}
            />
        </div>
    );
}