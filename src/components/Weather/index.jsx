/* eslint-disable @next/next/no-img-element */
import styles from './Weather.module.scss';
import { RiCelsiusLine } from 'react-icons/ri';

const Weather = ({ data }) => {
  if (data.message == 'city not found') {
    return;
  }

  const currentDate = new Date(data.dt * 1000);
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const temp = Math.floor(data.main.temp - 273.15);

  return (
    <div className={styles.wrapper}>
      <div className={styles.weather}>
        <div className={styles.weather__block__title}>
          <h1 className={styles.weather__block__title__city}>
            {data.name}, {data.sys.country}
          </h1>
          <h1 className={styles.weather__block__title__date}>
            {currentDate.toLocaleDateString('en-EN', options)}
          </h1>
        </div>
        <div className={styles.weather__сlimate}>
          <img
            src={`Weather/${data.weather[0].icon}.svg`}
            alt={`${data.weather[0].main}`}
            className={styles.climate__image}
          />
          <div className={styles.weather__сlimate__temperature}>
            <div className={styles.weather__сlimate__numeric}>
              {temp} <RiCelsiusLine size={20} className={styles.celsius} />
            </div>
            <div className={styles.weather__сlimate__text}>{data.weather[0].main}</div>
          </div>
        </div>

        <div className={styles.weather__other}>
          <div className={styles.weather__other__block}>
            <img src='Weather/Wind.svg' alt='Wind' className={styles.image} />
            Wind <span> {data.wind.speed}km/h</span>
          </div>
          <div className={styles.weather__other__block}>
            <img src='Weather/Humidity.svg' alt='Humidity' className={styles.image} />
            Humidity
            <span>{data.main.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
