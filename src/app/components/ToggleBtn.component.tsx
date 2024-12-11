export default function ToggleBtn({ options }) {
    return (
        <div className="toggle-options">
           {
                options.map((option) => (
                    <button key={option}>{option}</button>
                ))   
            }
        </div>
    )
}