'use client'
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

import Configuration from './components/Configuration.component';
import Description from './components/Description.component';
import DownloadButton from './components/DownloadButton.component';
import PrintableArea from './components/PrintableArea.component';

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fileUrl = '/InputData.csv';

      try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const csvText = await response.text(); 

        Papa.parse(csvText, {
          header: true,  
          dynamicTyping: true,  
          skipEmptyLines: true,  
          complete: (result) => {
            const sanitizedData = result.data.map((row: any) =>
              Object.fromEntries(
                Object.entries(row).map(
                  ([key, value]) => [key.replace(/[^\w]/g, '_'), value]  
                )
              )
            );
            setData(sanitizedData);
            console.log('Parsed JSON data:', sanitizedData);  
          },
        });
      } catch (error) {
        console.error('Error fetching CSV file: ', error); 
      }
    };

    fetchData();  
  }, []); 
  
  return (
    <div>
      <div>
        <Configuration dropDownData={data}/>
        <Description/>
        <DownloadButton/>
      </div>
      <PrintableArea dropDownData={data}/>
    </div>
  );
}