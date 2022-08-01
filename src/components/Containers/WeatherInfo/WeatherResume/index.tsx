import React from 'react'
import { capitalize, Grid, Skeleton, Typography } from '@mui/material';

import IconWeather from 'components/IconWeater';

interface WeatherResumeProps {
    weather: any;
    loading: boolean;
}

const WeatherResume = ({weather, loading}: WeatherResumeProps): JSX.Element => {
    return (
            <Grid 
                container
                item 
                direction='column' 
                justifyContent="center" 
                alignItems="center" 
                spacing={2}>
                    <IconWeather code={weather?.icon} />
                <Grid item>
                    {loading ? 
                        <Skeleton variant="text" width={150} height={20} /> : (
                        <Typography variant="h4">
                            {capitalize(weather?.description || '')}
                        </Typography>
                    )}
                </Grid>
            </Grid>
    )
}

export default WeatherResume;