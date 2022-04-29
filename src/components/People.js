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