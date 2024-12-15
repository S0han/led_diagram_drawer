import ScreenDimensions from './ScreenDimensions.component';
import DrawingInfo from './DrawingInfo.component';
import DynamicDrawing from './DynamicDrawing.component';

export default function PrintableArea({ dropDownData, selectedModel, selectedFloorDistance, description }) {
    const selectedData = dropDownData.find(item => item.Screen_MFR === selectedModel);
    
    return(
        <div className="flex w-full h-[calc(100vh-4rem)]">
            <div className="flex-1 p-4 border-r">
                <DynamicDrawing 
                    height={selectedData?.Height} 
                    width={selectedData?.Width} 
                    floorDistance={selectedFloorDistance}
                />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4">
                <div className="bg-blue-100 p-2">
                    <ScreenDimensions 
                        flrDistanceData={selectedFloorDistance} 
                        screenData={selectedData}
                    />
                </div>
                <div className="bg-green-100 p-2">
                    <DrawingInfo description={description}/>
                </div>
            </div>
        </div>
    )
}