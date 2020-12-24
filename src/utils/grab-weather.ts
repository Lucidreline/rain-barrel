import fetch from 'node-fetch'
import config from 'config'
import { Date } from 'mongoose'
import { isDate } from 'util'

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
	feelsLikeF: Number
	humidity: Number
	precipMM: Number
	weatherCode: Number
	windSpeedMPH: Number
	weatherDesc: string
	date: String // this is uppercase String because Date.now.tostring() returns String not string
}

const grabWeather = async () => {
	const res = await fetch(`http://wttr.in/${zipcode}?format=j1`)
	const resJson: IResponce = await res.json()

	const weather: IWeather = {
		zipcode: zipcode,
		temp_F: parseInt(resJson.current_condition[0].temp_F),
		feelsLikeF: parseInt(resJson.current_condition[0].FeelsLikeF),
		humidity: parseInt(resJson.current_condition[0].humidity),
		precipMM: parseInt(resJson.current_condition[0].precipMM),
		weatherCode: parseInt(resJson.current_condition[0].weatherCode),
		windSpeedMPH: parseInt(resJson.current_condition[0].windspeedMiles),
		weatherDesc: resJson.current_condition[0].weatherDesc[0].value,
		date: new Date().toString(),
	}

	return weather
}

export default grabWeather
