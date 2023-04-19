import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../login.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className='login' style={{backgroundColor:'#3c3c3c',}} >
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box   sx={{
            marginTop: 20,
            justifyContent:'center',
            alignItems:'center',
            flexDirection: 'column',
            alignItems: 'center',
            border : '1px solid',
            boxShadow : " 1px 1px gray",
            backgroundColor: 'white',
            borderRadius: '15px',
            border:'white'
            
          }}>
        <Box
          sx={{
            marginTop: 5,
            padding:10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           
            
          }}
        >
    
          <Typography component="h1" variant="h2">
            <strong style={{}}>Log in</strong>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
     
  

            <button type='submit'
             style={{
              backgroundColor:'#008080',
              color:'white',
              width:'100%',
              height: '50px',
              border: '1px solid white',
              marginTop:'20px',
              borderRadius: '5px'
              }}>
              <h3>Log In</h3>
            </button>
            <Grid container>
              <Grid item xs style={{marginTop:'20px'}}>
                <Link href="#" variant="body2">
                    여기에 머 적고싶은거 말하셈!!
                </Link>
              </Grid>
            
            </Grid>
          </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}