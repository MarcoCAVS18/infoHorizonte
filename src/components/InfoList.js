import React from 'react';
import ClipboardButton from './ClipboardButton';

const InfoList = ({ data = [] }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <ul>
        {data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="mb-4 p-4 border rounded-lg bg-gray-50">
              <div className="flex justify-between items-center">
                <span><strong>Titular:</strong> {item.TITULAR}</span>
                {item.TITULAR && <ClipboardButton textToCopy={item.TITULAR} />}
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Banco:</strong> {item.BANCO}</span>
                {item.BANCO && <ClipboardButton textToCopy={item.BANCO} />}
              </div>
              <div className="flex justify-between items-center">
                <span><strong>CUIT:</strong> {item.CUIT}</span>
                {item.CUIT && <ClipboardButton textToCopy={item.CUIT} />}
              </div>
              <div className="flex justify-between items-center">
                <span><strong>CBU:</strong> {item.CBU}</span>
                {item.CBU && <ClipboardButton textToCopy={item.CBU} />}
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Alias:</strong> {item.ALIAS}</span>
                {item.ALIAS && <ClipboardButton textToCopy={item.ALIAS} />}
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Observación:</strong> {item.OBSERVACION}</span>
                {item.OBSERVACION && <ClipboardButton textToCopy={item.OBSERVACION} />}
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Cuenta:</strong> {item.CUENTA}</span>
                {item.CUENTA && <ClipboardButton textToCopy={item.CUENTA} />}
              </div>
            </li>
          ))
        ) : (
          <li>No hay datos disponibles</li>
        )}
      </ul>
    </div>
  );
};

export default InfoList;
