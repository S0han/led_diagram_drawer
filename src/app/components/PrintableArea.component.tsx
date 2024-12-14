import ScreenDimensions from './ScreenDimensions.component';
import DrawingInfo from './DrawingInfo.component';
import DynamicDrawing from './DynamicDrawing.component';

export default function PrintableArea({ dropDownData, selectedModel, selectedFloorDistance }) {
    const selectedData = dropDownData.find(item => item.Screen_MFR === selectedModel);
    
    return(
        <div className="printable-sheet">
            <div className="drawing-side">
                <DynamicDrawing />
            </div>
            <div className="non-drawing-side">
                <div>
                    <ScreenDimensions 
                        flrDistanceData={selectedFloorDistance} 
                        screenData={selectedData}
                    />
                </div>
                <div>
                    <DrawingInfo/>
                </div>
            </div>
        </div>
    )
}