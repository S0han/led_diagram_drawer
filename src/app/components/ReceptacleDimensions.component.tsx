import InputField from './InputField.component';

export default function ReceptacleDimensions() {
    return (
        <div>
            <div>
                <h3>Notes:</h3>
            </div>
            <div>
                <InputField labelName = {"Height"}/>
                <InputField labelName = {"Width"}/>
                <InputField labelName = {"Depth"}/>
            </div>
        </div>
    )
}