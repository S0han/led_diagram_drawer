import InputField from './InputField.component';
import DisplayBox from './DisplayBox.component';

export default function ScreenDimensions({ screenData, flrDistanceData }) {

    const defaultScreenHeight = screenData?.Height || '';
    const defaultScreenWidth = screenData?.Width || '';

    console.log(flrDistanceData);

    return (
        <div>
            <div>
                <p className="font-bold">SCREEN DIMENSIONS</p>
            </div>
            <div>
                <div className="py-1">
                    <InputField defaultData={defaultScreenHeight} labelName={"Height:"}/>
                </div>
                <div className="py-1">
                    <InputField defaultData={defaultScreenWidth} labelName={"Width:"}/>
                </div>
                <div  className="py-1">
                    <DisplayBox value={flrDistanceData} labelName={"Floor Line:"}/>
                </div>
            </div>
        </div>
    );
}