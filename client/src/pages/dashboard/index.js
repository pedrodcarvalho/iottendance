import {
  Box,
  Grid,
  Stack,
  Typography
} from '@mui/material';

import StudentList from './StudentList';
import PresenceOverview from './PresenceOverview';
import MainCard from 'components/MainCard';
import DashboardCard from 'components/cards/statistics/DashboardCard';

import { setUser } from 'store/reducers/user';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { nanoid } from 'nanoid';

const DashboardDefault = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [userData, setUserData] = useState(user);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [studentsCount, setStudentsCount] = useState(0);
  const [classesCount, setClassesCount] = useState(0);

  const fetchUser = () => {
    try {
      setToken(localStorage.getItem('token'));

      axios.get('http://localhost:5000/user', {
        headers: {
          'Authorization': token
        }
      })
        .then((res) => {
          setUserData(userData);
          dispatch(setUser(res.data));
        });
    }
    catch (err) {
      window.location.href = `/error?message=${err.message}`;
    }
  };

  const fetchStudents = async () => {
    try {
      await axios.get('http://localhost:5000/get-students', {
        headers: {
          'Authorization': token
        }
      })
        .then((res) => {
          setStudentsCount(res.data.length);
        });
    }
    catch (err) {
      window.location.href = `/error?message=${err.message}`;
    }
  };

  const fetchClasses = async () => {
    try {
      await axios.get('http://localhost:5000/get-classes', {
        headers: {
          'Authorization': token
        }
      })
        .then((res) => {
          setClassesCount(res.data.length);
        });
    }
    catch (err) {
      window.location.href = `/error?message=${err.message}`;
    }
  };

  useEffect(() => {
    fetchUser();
    fetchStudents();
    fetchClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = async (message) => {
      console.log('Received message:', message.data);

      try {
        const token = localStorage.getItem('token');

        await axios.get(`http://localhost:5000/find-student/${message.data}`, {
          headers: {
            'Authorization': token
          }
        });
      }
      catch (err) {
        const values = {
          cardId: message.data,
          course: 'Computer Engineering 1',
          name: `Student ${nanoid(3)}`,
          studentNumber: `${nanoid(8)}`
        };

        await axios.post('http://localhost:5000/add-student', values, {
          headers: {
            'Authorization': token
          }
        })
          .catch((err) => {
            window.location.href = `/error?message=${err.message}`;
          });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant='h5'>Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <DashboardCard title='Total Students' count={`${studentsCount}`} type='students' />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <DashboardCard title='Total Classes' count={`${classesCount}`} type='classes' />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      <Grid item xs={12} md={5} lg={8}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Attendance</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2.33 }} content={false}>
          <Box sx={{ p: 3, pb: 5.66 }}>
            <Stack spacing={2}>
              <Typography variant='h6' color='textSecondary'>
                Presence Overview
              </Typography>
            </Stack>
          </Box>
          <PresenceOverview />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Students List</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <StudentList />
        </MainCard>
      </Grid>

    </Grid>
  );
};

export default DashboardDefault;
