import React from 'react';
import MainContainer from './components/MainContainer';
import Background from './components/Background'; // Asegúrate de importar Background
import './index.css';

function App() {
  return (
    <>
      <Background />  {/* Añadimos el componente Background */}
      <MainContainer />
    </>
  );
}

export default App;
