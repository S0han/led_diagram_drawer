import ToggleBtn from './ToggleBtn.component';

export default function DropDown() {
    return (
        <div>
            <select>
                <option value="test1">test1</option>
                <option value="test2">test2</option>
            </select>
            <ToggleBtn options={["btn1", "btn2"]} />
        </div>
    );
}