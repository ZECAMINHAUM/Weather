import React from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'

import { dataParser } from 'components/Containers/WeatherInfo/CardWeatherDetails/helpers/utils'

interface CardWDProps {
    main: any;
}
const CardWeatherDetails = ({main}: CardWDProps): JSX.Element => (
    <Card>
        <CardContent>
            <Grid container direction="row">
                {dataParser?.map((parserItem, index) => (
                    <Grid 
                        key={index} 
                        container 
                        item 
                        xs={12} sm={6} md={4} 
                        direction="row" 
                        alignItems="center" spacing={0.5}>
                        <Grid item>
                            <Typography component="div" variant="subtitle2">{parserItem.label}:</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                {main?.[parserItem?.key]} {parserItem.sufixLabel}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </CardContent>
    </Card>
)


export default CardWeatherDetails