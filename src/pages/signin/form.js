import React from 'react'
import SButton from '../../components/Button'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import Form from 'react-bootstrap/Form'

export default function SForm({form, handleChange, handleSubmit, isLoading}) {
  return (
    <Form>
      <TextInputWithLabel
        label='Email Address'
        name='email'
        value={form.email}
        type='email'
        placeholder='Enter email'
        onChange={handleChange}
      />
      <TextInputWithLabel
        label='Password'
        name='password'
        value={form.password}
        type='password'
        placeholder='Password'
        onChange={handleChange}
      />
      <SButton
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        variant="primary">
        Submit
      </SButton>
    </Form>
  )
}
