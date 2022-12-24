import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import SAlert from '../../components/Alert'
import Form from './form'
import { useNavigate, useParams } from 'react-router-dom'
import SBreadcrumb from '../../components/Breadcrumb'

export default function CategoriesEdit() {
  const navigate = useNavigate()
  // const { categoriesId } = useParams()
  const [form, setForm] = useState({
    name:''
  })
  const [alert, setAlert] = useState({
    status: false,
    type: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const fetchOneCategories = async () => {
    // const res = await getData(`api/v1/categories/${categoriesId}`)
    // setForm({...form, name: res.data.data.name})
  }
  useEffect(() => {
  fetchOneCategories()
  }, [])
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      navigate('/categories')
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setAlert({
        ...alert,
        status: true,
        type: 'danger',
        message: err.response.data.msg
      })
    }
  }
  return (
    <Container>
      <SBreadcrumb
        textSecond={'Categories'}
        urlSecond={'/categories'}
        textThird='Edit'
      />
      {alert.status && <SAlert type={alert.type} message={alert.message} />}
      <Form
        edit
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}
