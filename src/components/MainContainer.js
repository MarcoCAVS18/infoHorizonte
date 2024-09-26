import React, { useState } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import InfoList from './InfoList';

const MainContainer = () => {
  const [sheetData, setSheetData] = useState([]);  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white h-3/4 p-8 rounded-lg shadow-lg flex flex-col items-center w-full max-w-3xl">
        <Header />
        <SearchInput setSheetData={setSheetData} />

        {/* Solo renderizar InfoList si hay datos */}
        {sheetData.length > 0 && (
          <div className="w-full h-full overflow-y-auto mt-4"> 
            <InfoList data={sheetData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
