import { useEffect, useState } from 'react';
import Weather from '@/src/components/Weather';
import getWeather from '@/utils/fetch';

export default function Home({ weather }) {
  return <div className='container'>{weather && <Weather data={weather} />}</div>;
}

export const getServerSideProps = async () => {
  const weather = await getWeather('kostanay');

  return {
    props: { weather }
  };
};
