import React, { useCallback, useEffect, useState } from 'react';
import { Container } from '@mui/material';

import WeatherInfo from 'components/Containers/WeatherInfo';
import { gettWeatherInfoService } from 'services/weather';
import { getCurrentLocation } from 'utils/locations';

function App() {

  const [weatherData, setWeatherData] = useState<any>();

  const getWeatherData = useCallback(() => 
      getCurrentLocation(cords => {
        gettWeatherInfoService(cords.latitude, cords.longitude)
          .then(({data}) => setWeatherData(data))
      })
    ,[])

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData])

  return (
    <Container maxWidth='md' fixed>
      <WeatherInfo weatherData={weatherData} />
    </Container>
  );
}

export default App;
