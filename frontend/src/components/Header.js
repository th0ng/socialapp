import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FaUserCircle } from 'react-icons/fa';
export default function Header({ handleLogout }) {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#285430' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Facebaki
          </Typography>
          <FaUserCircle />
        </Toolbar>
      </AppBar>
    </Box >
  );
}
