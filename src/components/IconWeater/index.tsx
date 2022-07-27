import React from 'react'

interface Props {
    code: string
}

const IconWeather = ({code}: Props): JSX.Element => {
    
    const genUrl = () => 
        `http://openweathermap.org/img/wn/${code}@2x.png`

    return <img src={genUrl()} alt="weather_img" />
}

export default IconWeather