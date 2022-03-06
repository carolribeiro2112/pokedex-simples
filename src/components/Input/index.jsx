import { useState } from "react";
import { InputContainer } from './styles';
import { FiSearch } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';

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
      <FiSearch size={15}/>
      <input value={text} onChange={handleChange} placeholder="Search"/>
      {
        text && (
          <button onClick={handleOnClick}><IoIosClose size={20}/></button>
        )
      }
    </InputContainer>
  )
}