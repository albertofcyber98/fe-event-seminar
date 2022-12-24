/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Container, Table, Spinner} from 'react-bootstrap'
import SButton from '../../components/Button'
import SBreadcrumb from '../../components/Breadcrumb'
import SNavbar from '../../components/Navbar'
import { config } from '../../configs'
import axios from 'axios'

export default function Categories() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const getCategoriesAPI = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTimeout(() => {
        setIsLoading(false)
        console.log(res.data.data)
        setData(res.data.data)
      }, 3000);
    } catch (err) {
      setIsLoading(true)
      console.log(err)
    }
  }
  useEffect(() => {
    getCategoriesAPI()
  }, []);
  if (!token) return <Navigate to='/signin' replace={true} />
  return (
    <>
      <SNavbar/>
      <Container className='mt-5'>
        <SBreadcrumb textSecond='Categories'/>
        <SButton action={()=>navigate('/categories/create')}>Tambah</SButton>
        <Table className='mt-3' striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center' }}>
                  <div className='flex items-center justify-center'>
                    <Spinner animation='grow' variant='light'/>
                  </div>
                </td>
              </tr>
            ) :
              data.map((data, index) => (
              <tr key={index}>
                <td>{index+=1}</td>
                <td>{data.name}</td>
                <td>@mdo</td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}
