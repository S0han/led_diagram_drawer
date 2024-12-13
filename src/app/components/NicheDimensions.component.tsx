import InputField from './InputField.component';

export default function NicheDimensions() {
    return (
        <div>
            <div>
                <p>NICHE DIMENSIONS:</p>
            </div>
            <div>
                <InputField labelName={"Height"}/>
                <InputField labelName={"Width"}/>
                <InputField labelName={"Depth"}/>
            </div>
        </div>
    );
}