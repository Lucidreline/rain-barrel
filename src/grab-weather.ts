import fetch from 'node-fetch'
import config from 'config'

const zipcode: string = config.get('zipcode')

interface IResponce {
	current_condition: {
		temp_F: string
		FeelsLikeF: string
		cloudcover: string
		humidity: string
		precipMM: string
		weatherCode: string
		windspeedMiles: string
		weatherDesc: { value: string }[]
		[key: string]: any
	}[]
	[key: string]: any
}

interface IWeather {
	zipcode: string
	temp_F: Number
	feelsLikeC: Number
	cloudCover: Number
	humidity: Number
	precipMM: Number
	weatherCode: Number
	windSpeedMPH: Number
	weatherDesc: string
}

const grabWeather = async () => {
	const res = await fetch(`http://wttr.in/${zipcode}?format=j1`)
	const resJson: IResponce = await res.json()

	const weather: IWeather = {
		zipcode: zipcode,
		temp_F: parseInt(resJson.current_condition[0].temp_F),
		feelsLikeC: parseInt(resJson.current_condition[0].FeelsLikeF),
		cloudCover: parseInt(resJson.current_condition[0].cloudcover),
		humidity: parseInt(resJson.current_condition[0].humidity),
		precipMM: parseInt(resJson.current_condition[0].precipMM),
		weatherCode: parseInt(resJson.current_condition[0].weatherCode),
		windSpeedMPH: parseInt(resJson.current_condition[0].windspeedMiles),
		weatherDesc: resJson.current_condition[0].weatherDesc[0].value,
	}

	return weather
}

export default grabWeather
