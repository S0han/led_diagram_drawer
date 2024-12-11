import Papa from 'papaparse';
import React from 'react';

export default function fetchCSVData({ onFileLoad }){
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            Papa.parse(file, {
                complete: (result) => {
                  onFileLoad(result.data);  
                },
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
            });
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    )
};   