export default function DropDown({ options, label, onChange }) {
    return (
        <div className="flex flex-col">
            <label className="mb-1">{label}</label>
            <select onChange={onChange} className="border p-2">
                {
                    options.map((item: string, index: number) => (
                        <option key={index} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    );
}