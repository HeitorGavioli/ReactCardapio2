import React from 'react';

function FooterInfo() {
  return (
    <footer className="main-footer" style={{ padding: '10px 0', marginTop: '10px', borderTop: '1px solid #ddd', backgroundColor: '#f8f8f8' }}>
      <p>© {new Date().getFullYear()} Nosso Restaurante Incrível. Todos os direitos reservados.</p>
      <p>Siga-nos nas redes sociais!</p>
    </footer>
  );
}

export default FooterInfo;