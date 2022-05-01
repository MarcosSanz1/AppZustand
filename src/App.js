import './App.css';
import People from './components/People';
import Input from './components/Input';
import { useSettingsStore } from './store/store'
import React, { useEffect } from 'react';

function App() {
  const toogleDarkMode = useSettingsStore(state => state.toogleDarkMode)
  const dark = useSettingsStore((state) => state.dark)

  useEffect(() => {
    if (dark) {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="App">
      <button onClick={toogleDarkMode}>Toogle Dark Mode</button>
      <p>People</p>
      <Input />
      <People />
    </div>
  );
}

export default App;

// Hacemos la comprobación del valor de dark y accederemos directamente al cuerpo del documento (html) y añadiremos o eliminaremos la class='dark' que tenemos en (css)
// Con el botón llamaremos a la función que cambiará el valor de dark.