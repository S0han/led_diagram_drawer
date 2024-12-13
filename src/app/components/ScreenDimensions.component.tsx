import InputField from './InputField.component';

export default function ScreenDimensions({ defaultData }) {
    return (
        <div>
            <InputField labelName = {"Height"}/>
            <InputField labelName = {"Width"}/>
            <InputField labelName = {"Floor Line"}/>
        </div>
    );
}