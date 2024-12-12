export default function DropDown({ options, label }) {
    return (
        <div>
            <label>
                {label}
                <select>
                    {
                        options.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
            </label>
        </div>
    );
}