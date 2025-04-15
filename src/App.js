// src/App.js
import React from 'react';
import './App.css'; // Certifique-se de que o CSS está sendo importado
import MenuItem from './components/MenuItem'; // Importa o componente MenuItem
import menuItems from './data'; // Importa os dados do cardápio

function App() {
  return (
    // Assumindo que existe um container principal ou pode ser o próprio App
    <div className="App"> {/* Ou qualquer outro container/classe que você use */}

      {/* Container específico para o cardápio */}
      <div className="cardapio-container">
        <h1>Nosso Cardápio</h1>

        {/* Container para a lista de itens */}
        <div className="lista-itens-cardapio">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id} // Chave única para cada item na lista
              item={item}   // Passa o objeto 'item' inteiro como prop
            />
          ))}
        </div>
      </div>

    </div> // Fecha o container principal do App
  );
}

export default App;