import ScreenDimensions from './ScreenDimensions.component';
import NicheDimensions from './NicheDimensions.component';
import ReceptacleDimensions from './ReceptacleDimensions.component';
import DrawingInfo from './DrawingInfo.component';
import DynamicDrawing from './DynamicDrawing.component';

export default function PrintableArea({ dropDownData }) {
    return(
        <div className="printable-sheet">
            <div className="drawing-side">
                <DynamicDrawing />
            </div>
            <div className="non-drawing-side">
                <div>
                    <NicheDimensions />
                    <ScreenDimensions/>
                </div>
                <div>
                    <ReceptacleDimensions/>
                    <DrawingInfo/>
                </div>
            </div>
        </div>
    )
}