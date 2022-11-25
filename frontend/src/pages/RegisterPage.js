/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
import { Box, FormGroup, FormControl,  TextField, RadioGroup, FormControlLabel, Radio, Typography, Button } from '@mui/material';

const RegisterPage = () => {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState("male");

  return (
    <Box sx={{width: 800,margin: 'auto',}}> 
      <Typography variant='h2'>Register</Typography>
      <FormGroup>
        <FormControl>
          <TextField color='success'label="Full Name"sx={{margin: '8px'}}
          onChange={() => {setFullname(event.target.value)}}
          />
          <TextField color='success'label="Email"sx={{margin: '8px',}} onChange={() => {setEmail(event.target.value)}}/>
          <TextField color='success'label="Username"sx={{margin: '8px',}} onChange={() => {setUsername(event.target.value)}}/>
          <TextField color='success'label="Password"sx={{margin: '8px',}} onChange={() => {setPassword(event.target.value)}}/>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2003-08-28"
            color="success"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              margin: '8px',
            }}
            onChange={() => {() => setBirthday(event.target.value)}}
          />
          <Typography align='left' sx={{ml: '8px',}}>Gender</Typography>
          <RadioGroup
            id="gender"
            label="gender"
            defaultValue="male"
            name="radio-buttons-group"
            sx={{
              ml: '8px',
            }}
            onChange={() => {() => setGender(event.target.value)}}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </FormGroup>
      <Button variant="contained"color="success"sx={{margin: '8px',width: '100%',padding: 1,}}>
        Submit
      </Button>
    </Box>
  )
}

export default RegisterPage;