import React from 'react';
import ClipboardButton from './ClipboardButton'; 

const InfoList = ({ data = [] }) => {
  console.log("Datos en InfoList:", data); 

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 md:p-4 lg:p-4">
      <ul>
        {data.length > 0 ? (
          data.map((item, index) => {
            // Texto que sera copiado al portapapeles
            const textToCopy = `*Categoría:* ${item.CATEGORIA}\n*Días:* ${item.DIAS}\n*Horarios:* ${item.HORARIOS}\n*Información:* ${item.INFORMACION} `;
            
            return (
              <li 
                key={index} 
                className="
                  mb-4 p-4 border rounded-lg bg-gray-50 
                  transform transition-all duration-300 ease-in-out
                  hover:scale-105 hover:bg-yellow-100
                "
              >
                <div className="flex justify-between items-center">
                  <span><strong>Categoría:</strong> {item.CATEGORIA}</span>
                  <ClipboardButton textToCopy={textToCopy} /> 
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Días:</strong> {item.DIAS}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Horarios:</strong> {item.HORARIOS}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">
                    <strong>Información:</strong> {item.INFORMACION || 'No disponible'}
                  </span>
                </div>
              </li>
            );
          })
        ) : (
          <li>No hay datos aca</li>
        )}
      </ul>
    </div>
  );
};

export default InfoList;
