import React from 'react';

const MenuItem = ({ item, onAddToCart }) => { // Adicionado onAddToCart
  return (
    <div className="menu-item">
      <img src={item.imagemUrl} alt={item.alt} width={220} height={180}/>
      <h2 >{item.nome}</h2>
      <p>{item.descricao}</p>
      <p className="preco">R$ {item.preco.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(item)}
        style={{
          backgroundColor: '#155B23',
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