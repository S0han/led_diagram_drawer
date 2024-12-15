import React, { useState } from 'react';
import DropDown from './DropDown.component';

export default function Configuration({ dropDownData, onModelChange, onFlrDistChange }) {  
    const screen_models = [...new Set(dropDownData.map((item: any) => item.Screen_MFR))];
    const [floorDistance, setFloorDistance] = useState('');

    const handleFloorDistanceChange = (e) => {
        let newValue = e.target.value;

        if (!/^\d*\.?\d*$/.test(newValue)) {
            newValue = newValue.replace(/[^0-9.]/g, '');
        }

        setFloorDistance(newValue);
        onFlrDistChange(newValue);
    };

    return (
        <div className="border p-4 flex flex-col space-y-4">
            <div className="w-full">
                <p className="font-bold">CONFIGURATION</p>
            </div>
            <div className="w-full">
                <DropDown 
                    options={screen_models} 
                    label="Select Model" 
                    onChange={(e) => onModelChange(e.target.value)}
                />
            </div>
            <div className="w-full flex flex-col space-y-2">
                <label htmlFor="floorDistance" className="font-semibold">Floor Distance</label>
                <input
                    id="floorDistance"
                    type="text"
                    value={floorDistance}
                    onChange={handleFloorDistanceChange}
                    className="border rounded-md p-2 w-full"
                />
            </div>
        </div>
    );
}
