import { TextField , Button, Box, CircularProgress } from '@mui/material'
import React, { useRef, useState } from 'react'

const Register = () => {

  const {loading , setLoading} = useState(false);

  const email = useRef();
  const password = useRef();

  const register = (event)=> {
    event.preventDefault();
    console.log('Login Clicked');
    console.log(email.current.value);
    console.log(password.current.value);
    setLoading(!loading)
  }

  return (
    <Box sx={{height:'80vh'}} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={register} className='d-flex justify-content-center flex-column w-25 gap-5' >    
        <TextField id="standard-basic" type='email' label="Email" variant="standard" inputRef={email} required />
        <TextField id="standard-basic" type='password' label="Password" variant="standard" inputRef={password} required />
        <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{color: 'white'}} size={20}/> : "Register"}</Button>

      </form>
    </Box>
  )
}

export default Register