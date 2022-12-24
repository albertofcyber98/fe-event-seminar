import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import SAlert from '../../components/Alert'
import { Navigate, useNavigate } from 'react-router-dom'
import { config } from '../../configs'
import SForm from './form'

export default function Signin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password:''
  })
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState({
    status: false,
    message: '',
    type:'danger'
  })
  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const res = await axios.post(
        `${config.api_host_dev}/cms/auth/signin`,
        {
          email: form.email,
          password: form.password
        }
      )
      console.log(res.data.data.token)
      localStorage.setItem('token', res.data.data.token)
      setIsLoading(false)
      navigate('/')
    } catch (err) {
      setIsLoading(false)
      setAlert({
        status: true,
        type: 'danger',
        message: err?.response?.data?.msg ?? 'Internal server error'
      })
    }
  }
  const token = localStorage.getItem('token')
  if (token) return <Navigate to='/' replace={true} />
  return (
    <Container>
      <div className='m-auto mt-5' style={{ width: '50%' }}>
        {alert.status && <SAlert message={alert.message} type={alert.type} />}
      </div>
          <Card style={{ width: '50%' }} className='m-auto mt-5'>
            <Card.Body>
              <Card.Title className='text-center'>Signin</Card.Title>
          <SForm
            form={form}
            handleChange={handleChange}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
            </Card.Body>
          </Card>
    </Container>
  )
}
