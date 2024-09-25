import axios from 'axios';

const SHEET_ID = '1nVgDvMFgGNBa6z1BOquw7QH_4yCG07AVJ8Eydi33jR4';
const API_KEY = 'AIzaSyD71A540UcxgU3kHLmm-3b2zHvjcN_TgTs';

// Función para obtener los nombres de las hojas
export const fetchSheetNames = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const sheets = response.data.sheets;

    // Verificar el contenido de las hojas
    console.log("Nombres de las hojas:", sheets.map(sheet => sheet.properties.title));

    return sheets.map(sheet => sheet.properties.title);
  } catch (error) {
    console.error("Error fetching sheet names from Google Sheets", error.response ? error.response.data : error.message);
    return [];
  }
};

// Función para obtener los datos de una hoja específica
export const fetchData = async (sheetName) => {
  const RANGE = `${sheetName}!A1:H`; // Ajustamos el rango para que capture todas las filas
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data.values;

    if (!data || data.length === 0) {
      console.warn(`No data found in sheet ${sheetName}`);
      return [];
    }

    // Verificar si los datos de la hoja se están obteniendo correctamente
    console.log(`Datos obtenidos de la hoja ${sheetName}:`, data);

    // Convertir las filas en objetos con las columnas correspondientes
    const formattedData = data.slice(1).map(row => ({
      ID: row[0] || '',
      TITULAR: row[1] || '',
      BANCO: row[2] || '',
      CUIT: row[3] || '',
      CBU: row[4] || '',
      ALIAS: row[5] || '',
      OBSERVACION: row[6] || '',
      CUENTA: row[7] || ''
    }));

    // Verificar los datos formateados
    console.log(`Datos formateados de la hoja ${sheetName}:`, formattedData);

    return formattedData;
  } catch (error) {
    console.error(`Error fetching data from sheet ${sheetName}`, error.response ? error.response.data : error.message);
    return [];
  }
};
