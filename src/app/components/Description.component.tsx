export default function Description({ onDescriptionChange }) {
    const handleInputChange= (e) => {
        const { name, value } = e.target;
        onDescriptionChange((prev) => ({...prev, [name]: value}));
    }
    
    return (
        <div>
            <div>
                <p>DESCRIPTION</p>
            </div>
            <div>
                <label>
                    {"Title"}
                    <input name="title" onChange={handleInputChange}/>
                </label>
                <label>
                    {"Drawer"}
                    <input name="drawer" onChange={handleInputChange}/>
                </label>
                <label>
                    {"Department"}
                    <input name="department" onChange={handleInputChange}/>
                </label>
                <label>
                    {"Date"}
                    <input name="date" onChange={handleInputChange}/>
                </label>
            </div>
        </div>
    )
}