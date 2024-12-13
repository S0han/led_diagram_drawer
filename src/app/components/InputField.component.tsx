export default function InputField({ labelName }) {
    const handleChange = (e) => {
        const val = e.target.value;
        if (!/^\d*\.?\d*$/.test(val)) {
            e.target.value = val.replace(/[^0-9.]/g, '');
        }
    }
    
    return (
        <div>
            <label>{labelName}</label>
            <input className="config-inputs" onChange={handleChange}/>
        </div>
    );
}