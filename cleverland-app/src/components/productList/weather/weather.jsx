import React, {useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TextField, Button } from '@material-ui/core';


import './form.css';

export const Form = () => {
	const [city, setCity] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [weather, setWeather] = useState({});
	const [isError, setIsError] = useState(false);
	const [myCities, setCities] = useState({})

  const onCityChange = (event) => (setCity(event.target.value))
		
	const onButtonClick = async () => {
		setIsError(false);
		setIsLoading(true);
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4a3e13f259dfdbd23f06c3973018636&units=metric`);
			const cityWeather = await response.json();
			setIsLoading(false);
			if (cityWeather.cod === '404') {
				setIsLoaded(false);
				throw new Error("Данные некорректны");
			}
			setWeather(cityWeather);
			setIsLoaded(true);
			console.log(cityWeather);
		}	catch(err) {
			setIsError(true);
			console.log(err);
		}
	};
	
	const onFavButtonClick = () => {
		setCities({cityName: city})
	}
		return (
			<div className="Form">
				<TextField value={city} onChange={onCityChange} />
				<Button onClick={onButtonClick}>Показать</Button>
				{ isLoading && (<CircularProgress />)}
				{ isLoaded && !isError && (
					<div className='city-wether'>
						<div>Температура в {weather.name}: {weather.main.temp}</div>
						<Button onClick={onFavButtonClick}>Добавить в избранные</Button>
					</div>
				)}
				{ isError && (<div>Произошла ошибка</div>)}
				
			</div>
		);
}