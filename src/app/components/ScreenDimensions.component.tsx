import InputField from './InputField.component';
import DisplayBox from './DisplayBox.component';

export default function ScreenDimensions({ screenData, flrDistanceData }) {

    const defaultScreenHeight = screenData?.Height || '';
    const defaultScreenWidth = screenData?.Width || '';

    console.log(flrDistanceData);

    return (
        <div>
            <div>
                <p>SCREEN DIMENSIONS:</p>
            </div>
            <div>
                <InputField defaultData={defaultScreenHeight} labelName={"Height"}/>
                <InputField defaultData={defaultScreenWidth} labelName={"Width"}/>
                <DisplayBox value={flrDistanceData} labelName={"Floor Line"}/>
            </div>
        </div>
    );
}