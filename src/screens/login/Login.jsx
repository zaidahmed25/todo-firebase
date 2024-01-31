import { TextField , Button, Box } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Box sx={{height:'80vh'}} className='d-flex justify-content-center align-item-center'>
      <form className='d-flex justify-content-center flex-column w-25 gap-5' >    
        <TextField id="standard-basic" type='email' label="Email" variant="standard" />
        <TextField id="standard-basic" type='password' label="Password" variant="standard" />
        <Button variant="contained">Login</Button>

      </form>
    </Box>
  )
}

export default Login