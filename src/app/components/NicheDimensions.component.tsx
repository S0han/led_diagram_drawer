import InputField from './InputField.component';

export default function NicheDimensions() {
    return (
        <div>
            <InputField labelName = {"Height"}/>
            <InputField labelName = {"Width"}/>
            <InputField labelName = {"Depth"}/>
        </div>
    );
}