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
    }

    return (
        <div>
            <div>
                <p>CONFIGURATION</p>
            </div>
            <div>
                <DropDown 
                    options={screen_models} 
                    label="Select Model" 
                    onChange={(e) => onModelChange(e.target.value)}
                />
                <div>
                    <label htmlFor="floorDistance">Floor Distance</label>
                    <input
                        type="text"
                        value={floorDistance}
                        onChange={handleFloorDistanceChange}
                        className="config-inputs"
                    />
                </div>
            </div>
        </div>
    );
}