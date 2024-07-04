import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

import AnimateButton from 'components/@extended/AnimateButton';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const AuthLogin = () => {
  const [keepLogin, setKeepLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values) => {
    values = { ...values, keepLogin: keepLogin };

    return await axios.post('http://localhost:5000/auth/login', values)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        window.location.href = '/';
      }).catch((err) => {
        throw new Error(err.response.data);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          submit: null,
          username: '',
          password: ''
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required('Username is required'),
          password: Yup.string().max(255).min(8, 'Password must be at least 8 characters').required('Password is required')
        })}
        onSubmit={async function (values, { setErrors, setStatus, setSubmitting }) {
          try {
            setStatus({ success: false });
            setSubmitting(false);

            await handleSubmit(values);
          }
          catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: `${err.message}. Incorrect username or password!` });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor='username-login'>Username</InputLabel>
                  <OutlinedInput
                    id='username-login'
                    type='username'
                    value={values.username}
                    name='username'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Enter username'
                    fullWidth
                    error={Boolean(touched.username && errors.username)}
                  />
                  {touched.username && errors.username && (
                    <FormHelperText error id='standard-weight-helper-text-username-login'>
                      {errors.username}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor='password-login'>Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id='-password-login'
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name='password'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                          size='large'
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder='Enter password'
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id='standard-weight-helper-text-password-login'>
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={keepLogin}
                        onClick={() => {
                          setKeepLogin(!keepLogin);
                        }}
                        name='keepLogin'
                        color='primary'
                        size='small'
                      />
                    }
                    label={<Typography variant='h6'>Keep me sign in</Typography>}
                  />
                  <Link variant='h6' component={RouterLink} to='' color='text.primary'>
                    Forgot Password?
                  </Link>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size='large' type='submit' variant='contained' color='primary'>
                    Login
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
