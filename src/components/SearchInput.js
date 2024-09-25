import React, { useState, useEffect } from 'react';
import { fetchSheetNames, fetchData } from '../services/googleSheetsService';

const SearchInput = ({ setSheetData }) => {
  const [sheetNames, setSheetNames] = useState([]);

  // Obtener los nombres de las hojas al cargar el componente
  useEffect(() => {
    const getSheetNames = async () => {
      const names = await fetchSheetNames();
      setSheetNames(names);
      
      // Verificar los nombres de las hojas que se han recibido
      console.log("Hojas disponibles:", names);
    };

    getSheetNames();
  }, []);

  // Manejar la selección de la hoja y obtener sus datos
  const handleSheetChange = async (e) => {
    const sheetName = e.target.value;
    // Eliminar la asignación a selectedSheet si no es necesaria
    // setSelectedSheet(sheetName);
    
    // Verificar la hoja seleccionada
    console.log("Hoja seleccionada:", sheetName);

    if (sheetName) {
      const data = await fetchData(sheetName);
      setSheetData(data);  // Pasar los datos a MainContainer
      
      // Verificar los datos obtenidos de la hoja seleccionada
      console.log(`Datos de la hoja ${sheetName}:`, data);
    }
  };

  return (
    <div className="w-full max-w-lg mt-4">
      {/* Select para elegir la hoja */}
      <select className="w-full p-2 border rounded-md" onChange={handleSheetChange}>
        <option value="">Selecciona una hoja</option>
        {sheetNames.map((sheetName, index) => (
          <option key={index} value={sheetName}>
            {sheetName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchInput;
