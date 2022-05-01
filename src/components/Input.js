import React, { useRef } from 'react'
import { usePeopleStore } from '../store/store'

export default function Input() {
    const inputRef = useRef()
    const addPerson = usePeopleStore((state) => state.addPerson)

    const add = () => {
        addPerson(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={add}>Add Person</button>
        </div>
    )
}

// Importamos el "estado" de la lista de personas. Donde meteremos la nueva persona.
// Con useRef podemos recoger el valor del input, el cual pasamos a addPerson que añadira una nueva persona. Luego usando esto, podemos cambiar el valor del input a ''.