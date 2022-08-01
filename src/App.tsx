import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { Button, CircularProgress, Container, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

import { gettWeatherInfoService } from 'services/weather';
import { getCurrentLocation } from 'utils/locations';

const WeatherInfo = React.lazy(() => import('components/Containers/WeatherInfo'));

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<any>(null);

  const getWeatherData = useCallback(() => {

    getCurrentLocation(cords => {
      setLoading(true)
      gettWeatherInfoService(cords.latitude, cords.longitude)
        .then(({data}) => {
          setWeatherData(data)
          setLoading(false)
        })
    })
  },[])

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData])

  return (
    <Container maxWidth='md' fixed>
      <Suspense fallback={<CircularProgress />}>
        <Button 
          data-testid="refresh-button"
          variant="outlined" 
          endIcon={<RefreshIcon />} 
          onClick={() => getWeatherData()} 
          disabled={loading}>
          Atualizar
        </Button>
        <WeatherInfo weatherData={weatherData} loading={loading} />
      </Suspense>
      <Typography style={{position: 'absolute', bottom: 0, right: 10}} variant="caption">
        Design não tão incrível, mas funcional
      </Typography>
    </Container>
  );
}

export default App;
