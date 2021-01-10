import fetch from 'node-fetch'
import config from 'config'

interface IOwmResponce {
	lat: number
	lon: number
	timezone_offset: number

	hourly: {
		dt: number
		temp: number
		pressure: number
		humidity: number
		dew_point: number
		uvi: number
		clouds: number
		visability: number
		wind_speed: number
		wind_deg: number
		pop: number
	}[]

	daily: {
		dt: number
		sunrise: number
		sunset: number
		temp: {
			day: number
			min: number
			max: number
			night: number
			eve: number
			morning: number
		}
		feels_like: {
			day: number
			night: number
			eve: number
			morn: number
		}
		pressure: number
		humidity: number
		dew_point: number
		wind_speed: number
		clouds: number
		pop: number
		uvi: number
		weather: {
			id: number
			main: string
			description: string
			icon: string
		}[]
		[key: string]: any
	}[]
	alerts: {
		sender_name: string
		event: string
		start: number
		end: number
		description: string
	}[]
}

const grabTodaysForcast = async (lat: string, lon: string) => {
	const owmRes = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=current,minutely&appid=${config.get(
			'openWeatherMapKey'
		)}`
	)
	const owmResJson: IOwmResponce = await owmRes.json()

	return owmResJson
}

export default grabTodaysForcast
