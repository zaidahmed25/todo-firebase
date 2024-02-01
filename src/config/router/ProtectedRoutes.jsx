import React, { useEffect, useState } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/Firebaseconfig';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({component}) => {

    const navigate = useNavigate()

    const [iseUser, setIsUser] = useState(false);

    useEffect(()=> {
        onAuthStateChanged(auth , (user)=> {
            if (!user) {
              navigate('/login')
              return
            }
            setIsUser(true)
            
        })

      } , [])

  return (
    iseUser ? 
    component : <Typography>Loading...</Typography>
  )
}

export default ProtectedRoutes