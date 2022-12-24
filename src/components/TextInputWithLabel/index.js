import React from 'react'
import Form from 'react-bootstrap/Form'
import TextInput from '../TextInput'

function TextInputWithLabel({
  label,
  name,
  value,
  type,
  onChange,
  placeholder
}) {
  return (
    <Form.Group className='mb-2'>
      <Form.Label>{label}</Form.Label>
      <TextInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  )
}

export default TextInputWithLabel;