import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

function Student() {
  const navigate = useNavigate()
  const userInfo = useSelector(state => state.user)

  useEffect(() => {
    if (userInfo.userRole !== 'student') {
      navigate('/')
    }
  }, [])

  return (
    <>
      <h2>Student</h2>
    </>
  )
}

export default Student