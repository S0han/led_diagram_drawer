export default function Description({ onDescriptionChange }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onDescriptionChange((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="border p-2">
            <div className="font-bold mb-4">
                <p>DESCRIPTION</p>
            </div>
            <div className="flex flex-col space-y-2">
                <label className="flex flex-col">
                    {"Title:"}
                    <input
                        name="title"
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </label>
                <label className="flex flex-col">
                    {"Drawer:"}
                    <input
                        name="drawer"
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </label>
                <label className="flex flex-col">
                    {"Department:"}
                    <input
                        name="department"
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </label>
                <label className="flex flex-col">
                    {"Date:"}
                    <input
                        name="date"
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </label>
            </div>
        </div>
    );
}
