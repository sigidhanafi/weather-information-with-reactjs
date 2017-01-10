import axios from 'axios';

const API_KEY = '34557a731444f6701fb6e5ac0faff6e3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},id`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}