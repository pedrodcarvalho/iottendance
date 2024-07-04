import { useState } from 'react';

import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

import MainCard from 'components/MainCard';

import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

const AddStudent = () => {
  const [studentData, setStudentData] = useState([]);

  const handleSubmit = async (values) => {
    const token = localStorage.getItem('token');

    await axios.post('http://localhost:5000/get-student-presence', values, {
      headers: {
        'Authorization': token
      }
    })
      .then((res) => {
        const rows = res.data.map((row, index) => {
          return {
            id: index,
            class: row.class,
            name: row.presence.name,
            time: new Date(row.presence.time).toLocaleString('pt-BR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
              timeZone: 'UTC'
            })
          };
        });

        setStudentData(rows);
      }).catch((err) => {
        throw new Error(err.response.data.message);
      });
  };

  return (
    <>
      <MainCard title='Get student presence'>
        <Formik
          initialValues={{
            submit: null,
            student: ''
          }}
          validationSchema={Yup.object().shape({
            student: Yup.string().max(255).required('Student name is required')
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
                    <InputLabel htmlFor='add-student'>Student Name</InputLabel>
                    <OutlinedInput
                      id='add-student'
                      type='student'
                      value={values.student}
                      name='student'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder='Enter student name'
                      fullWidth
                      error={Boolean(touched.student && errors.student)}
                    />
                    {touched.student && errors.student && (
                      <FormHelperText error id='standard-weight-helper-text-add-student'>
                        {errors.student}
                      </FormHelperText>
                    )}
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
                      Get student presence
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        <Grid item xs={12}>
          <DataGrid
            sx={{
              fontSize: '14px',
              height: 400,
              width: '80vw',
              margin: 'auto',
              marginTop: '24px',
              border: '1px solid #f0f0f0',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}
            rows={studentData}
            columns={[
              { field: 'class', headerName: 'Class', width: 200, flex: 1 },
              { field: 'name', headerName: 'Name', width: 200, flex: 1 },
              { field: 'time', headerName: 'Time', width: 200, flex: 1 }
            ]}
          />
        </Grid>
      </ MainCard>
    </>
  );
};

export default AddStudent;
