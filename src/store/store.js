import create from "zustand";
import { devtools, persist } from 'zustand/middleware'

let settingsStore = (set) => ({
    dark: false,
    toogleDarkMode: () => set((state) => ({ dark: !state.dark }))
})

let peopleStore = (set) => ({
    people: ['Jhon Doe', 'Jana Doe'],
    addPerson: (person) => 
        set((state) => 
            ({people: [...state.people, person]})
        )
})

settingsStore = devtools(settingsStore)
settingsStore  = persist(settingsStore, {name: 'user-settings'})

peopleStore = devtools(peopleStore)

export const useSettingsStore = create(settingsStore)
export const usePeopleStore = create(peopleStore)

// Creamos dos "estados" / funciones:
//  - settingsStore: Este sirve para cambiar el tema a oscuro, para ello usamos una variable booleana y cuando lanzamos la función cambiaremos su valor.
//  - peopleStore: Este sirve para añadir una nueva persona a la lista, creamos la lista y una función que recoja la nueva persona y la meta en la lista.

// - devtools para Local Storage
// - persist para dejar el "estado" de forma persistente en Local Storage. De forma que aunque volvamos a renderizar este fijo.

// Por último exportamos los "estados/funciones" con create para tenerlos de forma global, y poder usarlos en cualquier componente

// Usar zustand para variables globales y LocalStorage o AsyncStorage para guardar de forma "fija" en Local Storage.