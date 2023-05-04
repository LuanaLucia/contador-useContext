import './App.css';
import BtnContagem from './Components/BtnContagem/BtnContagem';
import React, { useState } from 'react';
import Painel from './Components/Painel/Painel';
import ContagemContext from './Context/ContagemContext';

function App() {
  const [contagem, setContagem] = useState(0)
  return (
    <div className="App">
      <ContagemContext.Provider value={{contagem, setContagem}}>
        <BtnContagem />
        <Painel contagem={contagem} />
      </ContagemContext.Provider>
    </div>
  );
}

export default App;
