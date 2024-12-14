export default function InputField({ labelName, defaultData }) {
    const handleChange = (e) => {
        const val = e.target.value;
        if (!/^\d*\.?\d*$/.test(val)) {
            e.target.value = val.replace(/[^0-9.]/g, '');
        }
    }
    
    return (
        <div>
            <label>{labelName}</label>
            <input defaultValue={defaultData} className="config-inputs" onChange={handleChange}/>
        </div>
    );
}