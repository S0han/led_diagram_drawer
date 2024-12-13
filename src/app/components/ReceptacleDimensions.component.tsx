import InputField from './InputField.component';

export default function ReceptacleDimensions() {
    return (
        <div>
            <div>
                <p>NOTES</p>
                <textarea id="receptacle-notes"></textarea>
            </div>
            <div>
                <InputField labelName = {"Height"}/>
                <InputField labelName = {"Width"}/>
                <InputField labelName = {"Depth"}/>
            </div>
        </div>
    )
}