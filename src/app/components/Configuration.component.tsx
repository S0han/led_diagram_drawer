import DropDown from './DropDown.component';
import ToggleBtn from './ToggleBtn.component';
import Inputfield from './InputField.component';

export default function Configuration({ dropDownData }) {
    
    const screen_models = [...new Set(dropDownData.map((item: any) => item.Screen_MFR))];

    return (
        <div>
            <div>
                <p>CONFIGURATION</p>
            </div>
            <div>
                <DropDown options={screen_models} label="Select Model"/>
                <ToggleBtn options={["Vertical", "Horizontal"]}/>
                <ToggleBtn options={["Niche", "Flat Wall"]}/>
                <Inputfield labelName={"Floor Distance"}/>
                <Inputfield labelName={"Niche Depth Var"}/>
            </div>
        </div>
    );
}