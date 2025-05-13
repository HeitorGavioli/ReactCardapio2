import React, { Suspense, lazy } from 'react';
import './App.css'; // Certifique-se de que o CSS está sendo importado
import ExtraInfo from './components/Extrainfo'; 
React.lazy();

function App2(){
  return(
    <div className='App'>
      <div>
        <h1>Contato</h1>
        <Suspense fallback={<div>Carregando informações extras...</div>}>
        <ExtraInfo />
      </Suspense>
      </div>
    </div>
  )
}
export default App2