import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom'; // Mantenha se você usa roteamento
import App from './App';
// import './index.css'; // Se você tiver um CSS global para o index, mantenha-o
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* <Router>  Mantenha o Router se App ou seus filhos usam rotas */}
      <App />
    {/* </Router> */}
  </React.StrictMode>
);

serviceWorker.unregister();

// --- Fim da Nova API ---


// Código do Service Worker (sem alteração necessária aqui)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();