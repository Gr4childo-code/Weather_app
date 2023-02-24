import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '@/components/Header/Header';
import Weather from '@/components/Weather/Weather';

export default function Home() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('Moscow');
  const api = '9e84e4f14cd2454ad8376ad607f58d63';

  useEffect(() => {
    getData(city);
  }, [city]);

  const getData = async (city) => {
    await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGetCity = (handleCity) => {
    setCity(handleCity);
  };

  return (
    <>
      <Header />
      <div className='container'>
        {typeof data.main !== 'undefined' ? (
          <Weather weather={data} handleGetCity={handleGetCity} />
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
