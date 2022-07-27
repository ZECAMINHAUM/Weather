import React from 'react'
import { Grid } from '@mui/material';

import WeatherResume from 'components/Containers/WeatherInfo/WeatherResume';
import CardWeatherDetails from 'components/Containers/WeatherInfo/CardWeatherDetails';

interface WeatherInfoProps {
    weatherData: any;
}

const WeatherInfo = ({weatherData}: WeatherInfoProps): JSX.Element => {
    console.log(weatherData)
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <WeatherResume main={weatherData?.weather[0]} />
            </Grid>
            <Grid item>
                <CardWeatherDetails />
            </Grid>
        </Grid>
    )
}

export default WeatherInfo;