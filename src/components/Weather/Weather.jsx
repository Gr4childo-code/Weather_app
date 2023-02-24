import Weather_form from './Weather_form/Weather_form';
import Weather_main from './Weather_main/Weather_main';

const Weather = ({ weather, handleGetCity }) => {
  return (
    <div className='weatherbox'>
      <Weather_form handleGetCity={handleGetCity} />
      <Weather_main weather={weather} />
    </div>
  );
};

export default Weather;
