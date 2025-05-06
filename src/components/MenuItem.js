import React from 'react';

function MenuItem({ item }) {
  // Função para formatar o preço como moeda brasileira (BRL)
  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco);
  };

  return (
    <div className="menu-item">
      <img
        src={item.imagemUrl}
        alt={item.nome}
        className="menu-item-imagem"
        loading="lazy"
      />
      <h3>{item.nome}</h3>
      <p>{item.descricao}</p>
      <span className="menu-item-preco">
        {formatarPreco(item.preco)}
      </span>
    </div>
  );
}

export default MenuItem;
