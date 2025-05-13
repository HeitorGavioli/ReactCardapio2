import React from 'react';
// 1. Importar createRoot de 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Mantenha se você usa roteamento

// Componente principal
import App from './App'; // Certifique-se que o caminho está correto (pode ser './App.js' ou só './App')
import App2 from './Extrainfos';
// Service Worker (mantenha como estava se estiver usando Create React App padrão)
import * as serviceWorker from './serviceWorker';

// --- Nova API do React 18 ---

// 2. Obter o elemento raiz do seu HTML (onde o React será montado)
const rootElement = document.getElementById('root');

// 3. Criar a raiz do React usando createRoot
const root = ReactDOM.createRoot(rootElement);

// 4. Renderizar sua aplicação dentro da raiz
//    É uma boa prática envolver em React.StrictMode para verificações extras em desenvolvimento
root.render(
  <React.StrictMode>
    <Router> {/* Mantenha o Router se App ou seus filhos usam rotas */}
      <App />
      <App2 />
    </Router>
  </React.StrictMode>
);

// --- Fim da Nova API ---


// Código do Service Worker (sem alteração necessária aqui)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();