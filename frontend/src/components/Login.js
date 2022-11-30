import React, { useState } from 'react';
import { Box, FormGroup, TextField, Typography, Button } from '@mui/material';
import { HiEye, HiEyeSlash } from "react-icons/hi2";

const Login = ({ handleLogin, setUsername, setPassword }) => {
  const [shown, setShown] = useState(false);

  return (
    <Box sx={{
      width: 800,
      margin: '50px auto',
      backgroundColor: '#E5D9B6',
      backgroundOpacity: 0.3,
      borderRadius: '10px',
      padding: 5
    }}>
      <Typography variant='h2'>Login</Typography>
      <FormGroup>
        {/* eslint-disable-next-line no-restricted-globals */}
        <TextField color='success' label="Username" sx={{ margin: '8px', }} onChange={() => { setUsername(event.target.value) }} />
        {/* eslint-disable-next-line no-restricted-globals */}
        <TextField color='success' label="Password" type={!shown ? "password" : "text"} sx={{ margin: '8px', }} onChange={() => { setPassword(event.target.value) }} />
        {!shown ? <HiEye onClick={() => setShown(!shown)} /> : <HiEyeSlash onClick={() => setShown(!shown)} />}
        <Button type="submit" variant="contained" color="success" sx={{ width: '50%', padding: 1, margin: 'auto' }} onClick={() => handleLogin()}>
          Submit
        </Button>
      </FormGroup>
    </Box>
  )
}

export default Login;
