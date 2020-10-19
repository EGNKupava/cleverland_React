import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route, useRouteMatch } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';

import { Mycities } from './mycities';
import { SelectedCity } from './selectedCity';

import './weather.css';

export const Weather = ({favorites, weather, onAddToFavorite, onDeleteFromfavorite, onFail, onShowSucces, onShowRequest}) => {
  const [city, setCity] = useState('');
  
  const onCityChange = (event) => (setCity(event.target.value))

  const onShowClick = async () => {
    onShowRequest();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4a3e13f259dfdbd23f06c3973018636&units=metric`);
      const weatherData = await response.json();
      debugger;
      if (weatherData.cod !== 200) {
        throw new Error("Данные некорректны");
      }
      onShowSucces(weatherData);
      } catch (err) {
        onFail();
    }
  };

  let match = useRouteMatch();
  
  return (
    <div className="Weather">
      <div className="current-weather">
        <TextField
          value={city}
          onChange={onCityChange}
          placeholder="Город"
          id="outlined-helperText"
          helperText="Введите название города"
          variant="outlined"
        />
        <Button onClick={onShowClick} variant="contained" color="primary">Показать погоду</Button>
        {weather.isLoading && (<CircularProgress />)}
        {weather.data && weather.isLoaded && (
          <div className='city-wether'>
            <div>Температура в {weather.data.name}: {weather.data.main.temp} &deg;C</div>
            <div>Скорость ветра: {weather.data.wind.speed} м/с</div>
            <div>Влажность: {weather.data.main.humidity} %</div>
            <div>Давление: {weather.data.main.pressure} hPa</div>
            <Button onClick={() => {
              onAddToFavorite(weather.data.name);
              setCity('')}} 
              variant="contained" 
              color="secondary">Добавить в избранные</Button>
          </div>
        )}
        {weather.isError && (<div>Произошла ошибка</div>)}
      </div>
      <div className="cities-list">
        <h3>Список любимых городов</h3>
        <Mycities favorites={favorites} deleteCity={onDeleteFromfavorite} />
      </div>
      <div>
        <Route path={`${match.path}/:city`}>
          <SelectedCity />
        </Route>
      </div>
    </div>
  );
}