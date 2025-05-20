import React from 'react';

const MenuItem = ({ item, onAddToCart }) => { // Adicionado onAddToCart
  return (
    <div className="menu-item">
      <img src={item.imagemUrl} alt={item.alt} />
      <h3>{item.nome}</h3>
      <p>{item.descricao}</p>
      <p className="preco">R$ {item.preco.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(item)}
        style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '8px 12px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Adicionar à Lista
      </button>
    </div>
  );
};

export default MenuItem;