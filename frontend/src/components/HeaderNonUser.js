import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function HeaderNonUser() {
  return (
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: '#65647C',
      padding: '0.5rem 0.5rem 0.5rem 0.5rem'
    }}>
      <Typography variant="h6" color='#F1D3B3' component="div">
        Facebaki
      </Typography>
      <Button color="inherit" sx={{ paddingX: '10px'}}>
        <Link to='/login'><Typography color='#F1D3B3'>Login</Typography></Link>
      </Button>
    </Box>
  );
}