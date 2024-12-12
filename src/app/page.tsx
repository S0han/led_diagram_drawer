'use client'
import React, { useState, useEffect } from 'react';
import Configuration from './components/Configuration.component';
import Papa from 'papaparse';

export default function Home() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const fileUrl = '/InputData.csv';

      try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const csvText = await response.text();
        console.log('CSV content fetched:', csvText);  

        Papa.parse(csvText, {
          header: true,  
          dynamicTyping: true,  
          skipEmptyLines: true,  
          complete: (result) => {
            const sanitizedData = result.data.map((row) =>
              Object.fromEntries(
                Object.entries(row).map(
                  ([key, value]) => [key.replace(/[^\w]/g, '_'), value]  
                )
              )
            );
            setData(JSON.stringify(sanitizedData));  
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
      <Configuration dropDownData={data} />
    </div>
  )
}