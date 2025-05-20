import React from 'react';

function ShoppingList({ items, onRemoveItem }) { // Adicionado onRemoveItem
  if (!items || items.length === 0) {
    return (
      <div className="shopping-list-container" style={{ border: '1px solid #4CAF50', padding: '15px', marginTop: '20px', backgroundColor: '#e8f5e9' }}>
        <h2>Minha Lista de Compras</h2>
        <p>Sua lista está vazia. Adicione itens do cardápio!</p>
      </div>
    );
  }

  const total = items.reduce((sum, item) => sum + item.preco, 0);

  return (
    <div className="shopping-list-container" style={{ border: '1px solid #4CAF50', padding: '15px', marginTop: '20px', backgroundColor: '#e8f5e9' }}>
      <h2>Minha Lista de Compras (Lazy Loaded)</h2>
      <ul>
        {items.map((item, index) => ( // Usar index como chave aqui é ok se a ordem não mudar drasticamente ou não houver IDs únicos por item adicionado
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #ccc', padding: '5px 0' }}>
            <span>{item.nome} - R$ {item.preco.toFixed(2)}</span>
            <button onClick={() => onRemoveItem(index)} style={{backgroundColor: '#f44336', color: 'white', border: 'none', padding: '3px 8px', borderRadius: '3px', cursor: 'pointer' }}>Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}

export default ShoppingList;