// src/components/ClipboardButton.js
import React, { useState, useEffect } from 'react';
import { FaClipboard, FaCheck } from 'react-icons/fa'; // Iconos de clipboard y check para cambiar
import PropTypes from 'prop-types';

const ClipboardButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true); // Cambiar el estado a 'copiado'
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles: ', err);
      });
  };

  // Efecto para resetear el ícono después de 4 segundos
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 4000); // 4 segundos
      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
    }
  }, [copied]);

  return (
    <button 
      onClick={handleCopy} 
      className="text-gray-500 hover:text-green-500 p-2 rounded-full transition-colors duration-200"
    >
      {copied ? <FaCheck className="text-green-500" /> : <FaClipboard />}
    </button>
  );
};

// Validar las props
ClipboardButton.propTypes = {
  textToCopy: PropTypes.string.isRequired,
};

export default ClipboardButton;
