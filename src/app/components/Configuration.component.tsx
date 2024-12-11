import DropDown from './DropDown.component';
import ToggleBtn from './ToggleBtn.component';
import Inputfield from './InputField.component';

export default function Configuration() {
    return (
        <div className='configuration-box'>
            <DropDown />
            <ToggleBtn options={["btn1", "btn2"]} />
            <Inputfield labelName={"Floor Distance"} />
        </div>
    )
}