'use client'
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

import Configuration from './components/Configuration.component';
import Description from './components/Description.component';
import DownloadButton from './components/DownloadButton.component';
import PrintableArea from './components/PrintableArea.component';

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [floorDistance, setFloorDistance] = useState('');
  const [description, setDescription] = useState({
    title: '',
    drawer: '',
    department: '',
    date: ''
  });

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
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-grow border md:w-2/ w-full m-2 p-4">
        <PrintableArea 
          selectedFloorDistance={floorDistance} 
          description={description}
          dropDownData={data} 
          selectedModel={selectedModel}
        />
      </div>
      <div className="md:w-1/3 w-full flex flex-col space-y-4 p-2">
        <Configuration 
            dropDownData={data} 
            onFlrDistChange={setFloorDistance} 
            onModelChange={setSelectedModel}
        />
        <Description onDescriptionChange={setDescription}/>
        <DownloadButton/>
      </div>
    </div>
  );
}