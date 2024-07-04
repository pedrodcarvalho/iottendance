import PropTypes from 'prop-types';

import {
  Box,
  Grid,
  Stack,
  Typography
} from '@mui/material';

import MainCard from 'components/MainCard';

const DashboardCard = ({ color, title, count, type }) => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant='h6' color='textSecondary'>
        {title}
      </Typography>
      <Grid container alignItems='center'>
        <Grid item>
          <Typography variant='h1' color='inherit'>
            {count}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
    <Box sx={{ pt: 2.25 }}>
      <Typography variant='caption' color='textSecondary'>
        Found
        <Typography component='span' variant='caption' sx={{ color: `${color || 'primary'}.main` }}>
          {` ${count}`}
        </Typography>
        {` ${count !== 1 ? type : (type === 'classes' ? 'class' : 'student')} among all entries`}
      </Typography>
    </Box>
  </MainCard>
);

DashboardCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
};

DashboardCard.defaultProps = {
  color: 'primary'
};

export default DashboardCard;
