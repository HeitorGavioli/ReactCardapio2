import React, { Suspense, lazy, useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import Extrainfo from './components/Extrainfo'; // Importar diretamente
import FooterInfo from './components/FooterInfo'; // Importar diretamente
import menuItemsData from './data'; // Renomeei para menuItemsData para clareza

// Lazy load ShoppingList
const ShoppingList = lazy(() => import('./components/ShoppingList'));

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showShoppingList, setShowShoppingList] = useState(false); // Para controlar a visibilidade/carga da lista

  const handleAddToCart = (itemToAdd) => {
    setCartItems(prevItems => [...prevItems, itemToAdd]);
    setShowShoppingList(true); // Mostra a lista quando um item é adicionado
    console.log(`${itemToAdd.nome} adicionado ao carrinho!`);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <div className="cardapio-container">
        <h1>Nosso Cardápio</h1>
        <div className="lista-itens-cardapio">
          {menuItemsData.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart} // Passa a função para adicionar ao carrinho
            />
          ))}
        </div>
      </div>

      <hr />
      <button onClick={() => setShowShoppingList(!showShoppingList)} style={{marginBottom: '20px'}}>
        {showShoppingList ? 'Esconder' : 'Ver'} Lista de Compras ({cartItems.length})
      </button>

      {showShoppingList && (
        <Suspense fallback={<div>Carregando sua lista de compras...</div>}>
          <ShoppingList items={cartItems} onRemoveItem={handleRemoveFromCart} />
        </Suspense>
      )}

      {/* Seção de Rodapé sempre visível */}
      <div className="app-footer" style={{textAlign: 'center', color: '#555', fontSize: '0.9em'}}>
        <Extrainfo />
        <FooterInfo />
      </div>
    </div>
  );
}

export default App;