export default function DropDown({ options, label }) {
    return (
        <div>
            <label>
                {label}
                <select>
                    {
                        options.map((item: string, index: number) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
            </label>
        </div>
    );
}