import { useState } from 'react';
import Weather from '@/src/components/Weather';
import getWeather from '@/utils/fetch';
import SearchForm from '@/src/components/Search';

export default function Home({ weather }) {
  const [city, setCity] = useState(weather);

  const handleSearchCity = async (e) => {
    const weather = await getWeather(e.current.value);
    setCity(weather);
  };
  console.log(city);
  return (
    <div className='container'>
      <SearchForm search={handleSearchCity} />
      {city.cod == '404' ? (
        <div className='error'>
          Error {city.cod} {city.message}
        </div>
      ) : (
        <Weather data={city} search={handleSearchCity} />
      )}
    </div>
  );
}

export const getServerSideProps = async () => {
  const weather = await getWeather('Moscow');
  return {
    props: { weather },
  };
};
