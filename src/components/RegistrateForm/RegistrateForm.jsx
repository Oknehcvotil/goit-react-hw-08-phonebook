import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import Typography from '@mui/material/Typography';
import { signUp } from 'api/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorAuth, getIsLoadingAuth } from 'redux/auth/selector';
import Loader from 'components/Loader';
import { getProfileThunk, loginThunk } from 'redux/auth/thunk';

const RegistrateForm = () => {
  const navigate = useNavigate();
  const error = useSelector(getErrorAuth);
  const isLoading = useSelector(getIsLoadingAuth);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    signUp(newUser)
      .then(() => {
        toast.success(`Congrats! User ${newUser.name} created`);
        dispatch(
          loginThunk({
            email: newUser.email,
            password: newUser.password,
          })
        )
          .unwrap()
          .then(() => {
            navigate('/contacts');
            dispatch(getProfileThunk());
          });
      })
      .catch(() => toast.error(`Ooops.... ${error}`));
  };

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      component={Paper}
      elevation={6}
      square
      sx={{
        minHeight: '80vh',
        mb: 2,
      }}
    >
      <Box
        sx={{
          py: 4,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
          <LockPersonOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          textAlign="center"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
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
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign UP
            {/* {authOperation === 'login' ? <AddLoader /> : <>Sign In</>} */}
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/login')}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {isLoading && !error && <Loader />}
    </Grid>
  );
};

export default RegistrateForm;
