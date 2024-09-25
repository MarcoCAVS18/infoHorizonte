// Header.js
import React from 'react';
import { ReactSVG } from 'react-svg';
import escudoIcon from '../images/ESCUDO.svg';

const Header = () => {
  return (
    <header className="flex justify-center items-center mb-4">
      {/* Contenedor flexible para el logo SVG */}
      <div className="flex flex-grow items-center justify-center">
        {/* Añadimos una clase al SVG */}
        <ReactSVG src={escudoIcon} className="escudo-svg" />
      </div>
    </header>
  );
};

export default Header;