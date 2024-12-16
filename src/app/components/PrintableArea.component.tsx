import React, { forwardRef } from 'react';
import ScreenDimensions from './ScreenDimensions.component';
import DrawingInfo from './DrawingInfo.component';
import DynamicDrawing from './DynamicDrawing.component';

const PrintableArea = forwardRef(({ dropDownData, selectedModel, selectedFloorDistance, description }, ref) => {
    const selectedData = dropDownData.find(item => item.Screen_MFR === selectedModel);
    
    return(
        <div className="flex w-full h-[calc(100vh-4rem)]" ref={ref}>
            <div className="flex-1 p-4">
                <DynamicDrawing 
                    height={selectedData?.Height} 
                    width={selectedData?.Width} 
                    floorDistance={selectedFloorDistance}
                />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4">
                <div className="border border-black p-2 max-w-[250px]">
                    <ScreenDimensions 
                        flrDistanceData={selectedFloorDistance} 
                        screenData={selectedData}
                    />
                </div>
                <div className="border border-black p-2">
                    <DrawingInfo description={description}/>
                </div>
            </div>
        </div>
    )
});

export default PrintableArea;