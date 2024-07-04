import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  Select,
  Stack,
  MenuItem,
  List
} from '@mui/material';

import MainCard from 'components/MainCard';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';
import { DeleteOutlined } from '@ant-design/icons';

const AttendanceCheck = () => {
  let [classes, setClasses] = useState([]);
  let [presentStudents, setPresentStudents] = useState([]);
  let [initialValues, setInitialValues] = useState({ submit: null, class: '' });

  const fetchClasses = () => {
    try {
      const token = localStorage.getItem('token');

      axios.get(`http://localhost:5000/get-classes`, {
        headers: {
          Authorization: token
        }
      }).then((res) => {
        setClasses(res.data);
        if (res.data.length > 0) {
          setInitialValues({ submit: null, class: res.data[0].name });
        }
      });
    }
    catch (err) {
      window.location.href = `/error?message=${err.message}`;
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (message) => {
      console.log('Received message:', message.data);

      try {
        const token = localStorage.getItem('token');

        axios.get(`http://localhost:5000/find-student/${message.data}`, {
          headers: {
            Authorization: token
          }
        }).then((res) => {
          setPresentStudents((prevPresentStudents) => {
            if (!prevPresentStudents.includes(res.data.name)) {
              return [...prevPresentStudents, res.data.name];
            }

            return prevPresentStudents;
          });
        });
      }
      catch (err) {
        window.location.href = `/error?message=${err.message}`;
      }
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close();
      }
    };
  }, []);

  const handleSubmit = async (values) => {
    const token = localStorage.getItem('token');

    values.students = presentStudents;

    if (values.students.length === 0) {
      throw new Error('Please scan a student card to take attendance');
    }

    return await axios.post('http://localhost:5000/make-attendance', values, {
      headers: {
        'Authorization': token
      }
    }).catch((err) => {
      throw new Error(err.response.data.message);
    });
  };

  return (
    <>
      <MainCard title='Take Attendance'>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            class: Yup.string().max(255).required('Class name is required')
          })}
          onSubmit={async function (values, { setErrors, setStatus, setSubmitting }) {
            try {
              setStatus({ success: false });
              setSubmitting(false);

              await handleSubmit(values);
            }
            catch (err) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor='add-class'>Class</InputLabel>
                    <Select
                      id='add-class'
                      type='text'
                      value={values.class}
                      name='class'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder='Enter class name'
                      fullWidth
                      error={Boolean(touched.class && errors.class)}
                    >
                      {
                        classes.length > 0 ?
                          classes.map((_class) => (<MenuItem key={_class.name} value={_class.name}>{_class.name}</MenuItem>))
                          :
                          <MenuItem key='0' value='0'>No classes found</MenuItem>
                      }
                    </Select>
                    {touched.class && errors.class && (
                      <FormHelperText error id='standard-weight-helper-text-add-class'>
                        {errors.class}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <List>
                    {presentStudents.map((student) => (
                      <MenuItem key={student} value={student}>
                        <Grid
                          item
                          xs={12}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #f0f0f0',
                          }}
                        >
                          {student}
                          <Button
                            onClick={() => {
                              setPresentStudents(presentStudents.filter((s) => s !== student));
                            }}
                          >
                            <DeleteOutlined />
                          </Button>
                        </Grid>
                      </MenuItem>
                    ))}
                  </List>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <AnimateButton>
                    <Button disableElevation disabled={isSubmitting} fullWidth size='large' type='submit' variant='contained' color='primary'>
                      Take Attendance
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </MainCard>
    </>
  );
};

export default AttendanceCheck;
