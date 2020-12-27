import fetch from 'node-fetch'
import config from 'config'

const zipcode: string = config.get('zipcode')
const owmKey: string = config.get('openWeatherMapKey')

interface IWttrResponce {
	current_condition: {
		temp_F: string
		FeelsLikeF: string
		humidity: string
		precipMM: string
		windspeedMiles: string
		uvIndex: string
		visability: string
		weatherDesc: { value: string }[]
		[key: string]: any
	}[]
	[key: string]: any
}

interface IOwmResponce {
	weather: {
		description: string
		[key: string]: any
	}[]
	main: {
		temp: number
		feels_like: number
		pressure: number
		humidity: number
		[key: string]: any
	}
	wind: {
		speed: number
		[key: string]: any
	}
	clouds: {
		all: number
	}
	[key: string]: any
}

interface IWeather {
	zipcode: string
	uvIndex: number
	pressure: number
	windSpeedMph: number
	cloudCoverPercent: number
	temp_F: number
	feelsLikeF: number
	humidity: number
	precipMM: number
	windSpeedMPH: number
	weatherDesc: string
	date: String // this is uppercase String because Date.now.tostring() returns String not string
}

const grabWeather = async () => {
	const wttrRes = await fetch(`http://wttr.in/${zipcode}?format=j1`)
	const wttrResJson: IWttrResponce = await wttrRes.json()

	const owmRes = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=Imperial&appid=${owmKey}`
	)
	const owmResJson: IOwmResponce = await owmRes.json()

	const weather: IWeather = {
		zipcode: zipcode,
		uvIndex: parseInt(wttrResJson.current_condition[0].uvIndex),
		pressure: owmResJson.main.pressure,
		windSpeedMph: average([
			owmResJson.wind.speed,
			parseInt(wttrResJson.current_condition[0].windspeedMiles),
		]),
		cloudCoverPercent: owmResJson.clouds.all,
		temp_F: average([
			owmResJson.main.temp,
			parseInt(wttrResJson.current_condition[0].temp_F),
		]),
		feelsLikeF: average([
			owmResJson.main.feels_like,
			parseInt(wttrResJson.current_condition[0].FeelsLikeF),
		]),
		humidity: average([
			owmResJson.main.humidity,
			parseInt(wttrResJson.current_condition[0].humidity),
		]),
		precipMM: parseInt(wttrResJson.current_condition[0].precipMM),
		windSpeedMPH: parseInt(wttrResJson.current_condition[0].windspeedMiles),
		weatherDesc: owmResJson.weather[0].description,
		date: new Date().toLocaleString(),
	}

	return weather
}

const average = (nums: number[]): number => {
	let sum: number = 0
	nums.forEach((num) => (sum += num))
	return sum / nums.length
}

export default grabWeather
