// src/services/googleSheetsService.js
import axios from 'axios';

const SHEET_ID = '1nVgDvMFgGNBa6z1BOquw7QH_4yCG07AVJ8Eydi33jR4';
const API_KEY = 'AIzaSyD71A540UcxgU3kHLmm-3b2zHvjcN_TgTs';

// Función para obtener los nombres de las hojas
export const fetchSheetNames = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const sheets = response.data.sheets;

    console.log("Nombres de las hojas:", sheets.map(sheet => sheet.properties.title));

    return sheets.map(sheet => sheet.properties.title);
  } catch (error) {
    console.error("Error fetching sheet names from Google Sheets", error.response ? error.response.data : error.message);
    return [];
  }
};

// Función para obtener los datos de una hoja específica
export const fetchData = async (sheetName) => {
  const RANGE = `${sheetName}!A1:E100`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data.values;

    if (!data || data.length === 0) {
      console.warn(`No data found in sheet ${sheetName}`);
      return [];
    }

    console.log(`Datos obtenidos de la hoja ${sheetName}:`, data);

    // Convertir las filas en objetos con las nuevas columnas correspondientes
    const formattedData = data.slice(1).map(row => ({
      ID: row[0] || '',
      CATEGORIA: row[1] || '',
      DIAS: row[2] || '',
      HORARIOS: row[3] || '',
      INFORMACION: row[4] || '', 
    }));

        formattedData.forEach(item => {
          console.log(`ID: ${item.ID}, Información: ${item.INFORMACION}`);
        });

    console.log(`Datos formateados de la hoja ${sheetName}:`, formattedData);

    return formattedData;
  } catch (error) {
    console.error(`Error fetching data from sheet ${sheetName}`, error.response ? error.response.data : error.message);
    return [];
  }
};
