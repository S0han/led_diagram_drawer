export default function DisplayBox({ labelName, value }) {
    return (
        <div>
            <label>{labelName}</label>
            <input type="text" value={value} readOnly className="display-box" />
        </div>
    );
}
