const getWeather = async city => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_TOKEN}`
  );
  return await response.json();
};
export default getWeather;
