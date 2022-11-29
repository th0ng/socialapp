/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import userService from '../services/users';
import { Box, FormGroup, TextField, RadioGroup, FormControlLabel, Radio, Typography, Button } from '@mui/material';
import { HiEye, HiEyeSlash } from "react-icons/hi2";

const RegisterPage = () => {
        const [userList, setUserList] = useState([]);
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [birthday, setBirthday] = useState(null);
        const [gender, setGender] = useState("male");

        const [shown, setShown] = useState(false);
        const [message, setMessage] = useState(null);

        const handleRegister = (e) => {
                e.preventDefault();
                if (username) {
                        if (password.length <= 8) {
                                try {
                                        const newUser = {
                                                name,
                                                email,
                                                username,
                                                password,
                                                birthday,
                                                gender
                                        }
                                        userService.getAll().then((users) => { setUserList(users) });
                                        // eslint-disable-next-line array-callback-return
                                        const sameUsernameCheck = userList.find((user) => {
                                                user.username === newUser.username;
                                        })
                                        if (!sameUsernameCheck) {
                                                userService.register(newUser);
                                        }
                                } catch (err) { console.log(err) }

                        } else {
                                setMessage("You need a password with length more than 8 king.")
                        }
                } else {
                        setMessage("You need an username for your account bro.")
                }
        }

        return (
                <Box sx={{
                        width: 800,
                        margin: '50px auto',
                        backgroundColor: '#E5D9B6',
                        backgroundOpacity: 0.3,
                        borderRadius: '10px',
                        padding: 5
                }}>
                        <Typography variant='h2'>Register</Typography>
                        <Typography variant='subtitle1' sx={{ color: 'red' }}>{message}</Typography>
                        <FormGroup>
                                <TextField color='success' label="Full Name" sx={{ margin: '8px' }}
                                        onChange={() => { setName(event.target.value) }}
                                />
                                <TextField color='success' label="Email" sx={{ margin: '8px', }} onChange={() => { setEmail(event.target.value) }} />
                                <TextField color='success' label="Username" sx={{ margin: '8px', }} onChange={() => { setUsername(event.target.value) }} />
                                <TextField color='success' label="Password" type={!shown ? "password" : "text"} sx={{ margin: '8px', }} onChange={() => { setPassword(event.target.value) }} />
                                {!shown ? <HiEye aria-hidden='false' onClick={() => { setShown(!shown) }} /> : <HiEyeSlash aria-hidden='false' onClick={() => { setShown(!shown) }} />}
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
                                        onChange={() => { () => { setBirthday(event.target.value) } }}
                                />
                                <Typography align='left' sx={{ ml: '8px', }}>Gender</Typography>
                                <RadioGroup
                                        id="gender"
                                        label="gender"
                                        defaultValue="male"
                                        name="radio-buttons-group"
                                        sx={{
                                                ml: '8px',
                                        }}
                                        onChange={() => { () => setGender(event.target.value) }}
                                >
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                                <Button type="submit" variant="contained" color="success" sx={{ width: '50%', padding: 1, margin: 'auto' }} onClick={handleRegister}>
                                        Submit
                                </Button>
                        </FormGroup>
                </Box>
        )
}

export default RegisterPage;
