import React from 'react'
import { Grid, Typography } from '@mui/material';

import IconWeather from 'components/IconWeater';

interface WeatherResumeProps {
    main: any
}

const WeatherResume = ({main}: WeatherResumeProps): JSX.Element => {
    return (
        <Grid 
            container 
            direction='row' 
            justifyContent="center" 
            alignItems="center" 
            spacing={2}>
            <Grid item>
                <IconWeather code={main?.icon} />
            </Grid>
            <Grid item>
                <Typography>
                    {main?.description}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default WeatherResume;