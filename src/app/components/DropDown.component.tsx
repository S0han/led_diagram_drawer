export default function DropDown({ options, label }) {
    return (
        <div>
            <label>
                {label}
                <select>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                </select>
            </label>
        </div>
    );
}