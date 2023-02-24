import Image from 'next/image';
import React from 'react';
import { WiCelsius } from 'react-icons/wi';

const Weather_main = ({ weather }) => {
  const toCel = (temp) => {
    return Math.floor(temp - 273.15);
  };
  const temperature = {
    feelsLike: toCel(weather.main.feels_like),
    temp: toCel(weather.main.temp),
    humidity: weather.main.humidity,
  };
  console.log(weather.weather[0].icon);

  console.log(weather);
  return (
    <div className='weather_container weather__main'>
      <p className='title'>
        {weather.name}
        <Image
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          width={40}
          height={40}
          alt={weather.weather[0].icon}
          className='image'
        />
      </p>
      <p className='temperature'>
        Temperature: ({temperature.temp})
        <WiCelsius className='icon' />
      </p>
      <p className='temperature'>
        Feels like: ({temperature.feelsLike})
        <WiCelsius className='icon' />
      </p>

      <div className='otherInformation'>
        <table>
          <tbody>
            <tr className='Tcolumn'>
              <td>Wind speed</td>
              <td>Wind gust</td>
              <td>Wind deg</td>
            </tr>

            <tr className='Trow'>
              <td>{weather.wind.speed}</td>
              <td>{weather.wind.gust}</td>
              <td>{weather.wind.deg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Weather_main;
