// Header.js
import React from 'react';
import { ReactSVG } from 'react-svg';
import escudoIcon from '../images/ESCUDO.svg';

const Header = () => {
  return (
    <header className="flex justify-center items-center mb-4">

      <div className="flex flex-grow items-center justify-center">

        <ReactSVG src={escudoIcon} className="escudo-svg" />
      </div>
    </header>
  );
};

export default Header;