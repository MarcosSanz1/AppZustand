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

// Hacer apuntes con el video https://www.youtube.com/watch?v=jLcF0Az1nx8&t=377s