import DropDown from './DropDown.component';
import ToggleBtn from './ToggleBtn.component';
import Inputfield from './InputField.component';

export default function Configuration({ dropDownData }) {
    
    const screen_models = [...new Set(dropDownData.map((item) => item.Screen_MFR))];

    return (
        <div className='configuration-box'>
            <DropDown options={screen_models} label="Select Model" />
            <ToggleBtn options={["btn1", "btn2"]} />
            <Inputfield labelName={"Floor Distance"} />
        </div>
    )
}