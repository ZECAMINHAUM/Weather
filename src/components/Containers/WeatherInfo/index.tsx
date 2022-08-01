import React from 'react'
import { Grid, Skeleton } from '@mui/material';

import WeatherResume from 'components/Containers/WeatherInfo/WeatherResume';
import CardWeatherDetails from 'components/Containers/WeatherInfo/CardWeatherDetails';
interface WeatherInfoProps {
    weatherData: any;
    loading: boolean;
}

const WeatherInfo = ({weatherData, loading}: WeatherInfoProps): JSX.Element => (
    <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
            <WeatherResume weather={weatherData?.weather[0]} loading={loading} />
        </Grid>
        <Grid item>
            {loading ? 
                <Skeleton variant="rectangular" width={500} height={120} /> : 
                <CardWeatherDetails main={weatherData?.main} />
            }
        </Grid>
    </Grid>
)

export default WeatherInfo;