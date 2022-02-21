import { useState } from "react";

export const Input = ({value, onChange}) => {
  const [text, setText] = useState(value || "");

  function handleChange(event) {
    onChange(event.target.value)
    setText(event.target.value)
  }

  return (
    <input type="search" value={text} onChange={handleChange} placeholder="Search"/>
  )
}