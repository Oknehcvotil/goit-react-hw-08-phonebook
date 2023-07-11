import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'redux/auth/selector';
import { useSelector } from 'react-redux';
import phoneBookImg from '../../images/phoneBookImg.jpg';

const Home = () => {
  const isAuth = useSelector(getToken);
  const navigate = useNavigate();

  const handleStart = () => {
    isAuth ? navigate('/contacts') : navigate('/login');
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(47, 68, 158, 0.3), rgba(47, 48, 58, 0.3)), url(${phoneBookImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0, 0, 50, 0.30 )',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: 1.5,
          marginBottom: 1.5,
          paddingTop: 10,
          paddingBottom: 10,
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            mb: 1,
            fontSize: {
              xs: '34px',
              sm: '44px',
              md: '56px',
            },
          }}
          variant="h1"
          fontWeight="700"
          color="#566ba9"
          maxWidth="480px"
          marginLeft="auto"
          marginRight="auto"
        >
          Phonebook
        </Typography>
        <Typography
          sx={{
            mb: {
              xs: 2.5,
              sm: 3,
              md: 6,
            },
            fontSize: {
              xs: '30px',
              sm: '40px',
              md: '52px',
            },
          }}
          variant="h2"
          color="#ffffff"
          fontWeight="500"
          maxWidth="480px"
          marginLeft="auto"
          marginRight="auto"
        >
          All your contacts <br />
          in one place
        </Typography>
        <Button
          type="button"
          variant="contained"
          aria-label="Start"
          size="large"
          color="primary"
          onClick={handleStart}
        >
          {!isAuth ? 'Get started' : 'Get your contacts'}
        </Button>
      </Box>
    </>
  );
};

export default Home;
