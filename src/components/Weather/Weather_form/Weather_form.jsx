import React, { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';
const Weather_form = ({ handleGetCity }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleGetCity(city);
    setCity('');
  };
  return (
    <form className='weather_container' onSubmit={handleSubmit}>
      <label htmlFor='city'>
        <div className='city_name'>Search for city:</div>
      </label>
      <div className='input_form'>
        <input
          type='text'
          name='city'
          value={city}
          placeholder='Moscow...'
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button type='submit' className='button_form'>
        <SlMagnifier className='icon_form' />
      </button>
    </form>
  );
};

export default Weather_form;
