export default function DropDown({ options, label, onChange }) {
    return (
        <div>
            <label>
                {label}
                <select onChange={onChange}>
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