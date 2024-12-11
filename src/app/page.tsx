'use client'
import DropDown from './components/DropDown.component';
import ToggleBtn from './components/ToggleBtn.component';
import Inputfield from './components/InputField.component';

export default function Home() {
  return (
    <div>
      <DropDown />
      <ToggleBtn options={["btn1", "btn2"]} />
      <Inputfield labelName={"Floor Distance"} />
    </div>
  )
}
