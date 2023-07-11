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
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk';
import { getErrorAuth, getIsLoadingAuth } from 'redux/auth/selector';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';

const LoginForm = () => {
  const error = useSelector(getErrorAuth);
  const isLoading = useSelector(getIsLoadingAuth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      loginThunk({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        navigate('/');
        toast.success(`Welcome back`);
      })
      .catch(() => toast.error(`Ooops ${error}`));
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
        <Typography component="h1" variant="h5" fontFamily="Ubuntu">
          Sign In
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
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/register')}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {isLoading && !error && <Loader />}
    </Grid>
  );
};

export default LoginForm;
