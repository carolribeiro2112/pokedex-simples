import { useState } from "react";
import { InputContainer } from './styles';

export const Input = ({value, onChange, onClear}) => {
  const [text, setText] = useState(value || "");

  function handleChange(event) {
    onChange(event.target.value)
    setText(event.target.value)
  }

  function handleOnClick () {
    setText('')
    onClear()
  }

  return (
    <InputContainer>
      <input value={text} onChange={handleChange} placeholder="Search"/>
      {
        text && (
          <button onClick={handleOnClick}>X</button>
        )
      }
    </InputContainer>
  )
}