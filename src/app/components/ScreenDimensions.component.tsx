import InputField from './InputField.component';

export default function ScreenDimensions() {
    return (
        <div>
            <div>
                <p>SCREEN DIMENSIONS:</p>
            </div>
            <div>
                <InputField labelName = {"Height"}/>
                <InputField labelName = {"Width"}/>
                <InputField labelName = {"Floor Line"}/>
            </div>
        </div>
    );
}