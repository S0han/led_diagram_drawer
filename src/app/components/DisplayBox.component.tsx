export default function DisplayBox({ labelName, value }) {
    return (
        <div>
            <label className="pr-2">{labelName}</label>
            <input 
                type="text" 
                value={value} 
                readOnly 
                className="display-box w-24" />
        </div>
    );
}