import React from 'react';
import Form from '@/components/form/Form.jsx'
import NavLink from '@/components/navLink/NavLink.jsx'

export default function Alter() {
    return (
        <main>

            <NavLink pages={[
                {path: '/', label: 'Inicio'},
                {path: '/criar', label: 'Criar'},
                {path: '/deletar', label: 'Deletar'}
            ]}/>

        </main>
    )
}