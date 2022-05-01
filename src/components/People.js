import React from 'react'
import { usePeopleStore } from '../store/store'

export default function People() {

    const people = usePeopleStore((state) => state.people)

    return (
        <div>
            <p>We have {people.lenght} people in your DB</p>
            <ul>
                {people.map(p => (
                    <li>{p}</li>
                ))}
            </ul>
        </div>
    )
}

// Importamos el "estado" de la lista de personas. Después guardamos su contenido en una constante y con map sacamos por pantalla la lista de personas.