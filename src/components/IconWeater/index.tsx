import { Skeleton } from '@mui/material'
import React from 'react'

interface Props {
    code: string
}

const IconWeather = ({code}: Props): JSX.Element => {
    
    const genUrl = () => `http://openweathermap.org/img/wn/${code}@2x.png`

    return code ? (
        <img src={genUrl()} alt="weather_img" loading="lazy" />
    ) : (
        <Skeleton variant="circular" width={50} height={50} />
    )
}

export default IconWeather