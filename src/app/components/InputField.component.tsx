export default function InputField({ labelName, defaultData }) {
    const handleChange = (e) => {
        const val = e.target.value;
        if (!/^\d*\.?\d*$/.test(val)) {
            e.target.value = val.replace(/[^0-9.]/g, '');
        }
    }
    
    return (
        <div className="flex items-center space-x-2">
            <label>{labelName}</label>
            <input 
                defaultValue={defaultData}
                readOnly 
                className="config-inputs w-12" 
                onChange={handleChange}
            />
        </div>
    );
}