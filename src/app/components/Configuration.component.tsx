import DropDown from './DropDown.component';
import ToggleBtn from './ToggleBtn.component';
import Inputfield from './InputField.component';

export default function Configuration({ dropDownData, onModelChange }) {
    
    const screen_models = [...new Set(dropDownData.map((item: any) => item.Screen_MFR))];

    const handleModelChange = (e) => {
        onModelChange(e.target.value);
    }

    return (
        <div>
            <div>
                <p>CONFIGURATION</p>
            </div>
            <div>
                <DropDown options={screen_models} label="Select Model" onChange={handleModelChange}/>
                <ToggleBtn options={["Vertical", "Horizontal"]}/>
                <Inputfield labelName={"Floor Distance"}/>
            </div>
        </div>
    );
}