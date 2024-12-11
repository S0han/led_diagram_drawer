import { useState } from "react";

export default function ToggleBtn({ options }) {
    const [selected, setSelected] = useState(options[0]);

    const handleToggle = (option) => {
        setSelected(option);
    }

    return (
        <div className="toggle-options">
           {
                options.map((option) => (
                    <button 
                        key={option}
                        className={`toggle-btn ${
                            selected === option ? "bg-gray-600" : "bg-white"}`} 
                        onClick={()=>{handleToggle(option)}}
                    >
                        {option}
                    </button>
                ))   
            }
        </div>
    )
}