import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import SAlert from '../../components/Alert'
import { useNavigate } from 'react-router-dom'
import SForm from './form'
import { postData } from '../../utils/fetch'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/auth/action'

export default function Signin() {
  const dispatch = useDispatch()
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
      const res = await postData(`/cms/auth/signin`, form)
      // const res = await axios.post(
      //   `${config.api_host_dev}/cms/auth/signin`,
      //   {
      //     email: form.email,
      //     password: form.password
      //   }
      // )
      // console.log(res.data.data.token)
      // localStorage.setItem('token', res.data.data.token)
      dispatch(userLogin(res.data.data.token, res.data.data.role))
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
  // const token = localStorage.getItem('token')
  // if (token) return <Navigate to='/' replace={true} />
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
