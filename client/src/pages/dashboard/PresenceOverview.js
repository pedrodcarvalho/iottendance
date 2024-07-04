import { useTheme } from '@mui/material/styles';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ReactApexChart from 'react-apexcharts';

const barChartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  grid: {
    show: false
  }
};

const PresenceOverview = () => {
  const [presence, setPresence] = useState({
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0
  });

  const theme = useTheme();

  const { secondary } = theme.palette.text;
  const info = theme.palette.primary.light;

  const [series, setSeries] = useState([{
    name: 'Present Students',
    data: [0, 0, 0, 0, 0]
  }]);

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    const fetchPresenceData = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get('http://localhost:5000/get-attendance', {
          headers: {
            Authorization: token
          }
        });

        const updatedPresence = {
          monday: 0,
          tuesday: 0,
          wednesday: 0,
          thursday: 0,
          friday: 0
        };

        response.data.forEach(classes => {
          classes.students.forEach(attendance => {
            switch (new Date(attendance.time).getDay()) {
              case 1:
                updatedPresence.monday++;
                break;
              case 2:
                updatedPresence.tuesday++;
                break;
              case 3:
                updatedPresence.wednesday++;
                break;
              case 4:
                updatedPresence.thursday++;
                break;
              case 5:
                updatedPresence.friday++;
                break;
              default:
                break;
            }
          });
        });

        setPresence(updatedPresence);
      }
      catch (err) {
        window.location.href = `/error?message=${err.message}`;
      }
    };

    fetchPresenceData();
  }, []);

  useEffect(() => {
    setSeries([{
      ...series[0],
      data: [presence.monday, presence.tuesday, presence.wednesday, presence.thursday, presence.friday]
    }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presence]);

  useEffect(() => {
    setOptions(prevOptions => ({
      ...prevOptions,
      colors: [info],
      xaxis: {
        ...prevOptions.xaxis,
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary]
          }
        }
      },
      tooltip: {
        theme: 'light'
      }
    }));
  }, [secondary, info]);

  return (
    <div id='chart'>
      <ReactApexChart options={options} series={series} type='bar' height={350} />
    </div>
  );
};

export default PresenceOverview;
