import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('https://polar-spire-61357-5869512552cd.herokuapp.com/auth/verify')
        .then(res=> {
            if(res.data.status) {

            } else {
                navigate('/')
            }
            console.log(res)
        })
    }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
