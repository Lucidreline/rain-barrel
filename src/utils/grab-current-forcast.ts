interface IWttrResponce {
	weather: {
		hourly: {
			DewPointC: string
			DewPointF: string
			FeelsLikeC: string
			FeelsLikeF: string
			HeatIndexC: string
			HeatIndexF: string
			WindChillC: string
			WindChillF: string
			WindGustKmph: string
			WindGustMiles: string
			chanceoffog: string
			chanceoffrost: string
			chanceofhightemp: string
			chanceofovercast: string
			chanceofrain: string
			chanceofremdry: string
			chanceofsnow: string
			chanceofsunshine: string
			chanceofthunder: string
			chanceofwindy: string
			cloudcover: string
			humidity: string
			precipMM: string
			pressure: string
			tempC: string
			tempF: string
			time: string
			uvIndex: string
			visibility: string
			weatherCode: string
			weatherDesc: {
				value: string
			}[]
			winddir16Point: string
			winddirDegree: string
			windspeedKmph: string
			windspeedMiles: string
			[key: string]: any
		}[]

		astronomy: {
			moon_illumination: string
			moon_phase: string
			moonrise: string
			moonset: string
			sunrise: string
			sunset: string
		}[]

		maxtempC: string
		maxtempF: string
		mintempC: string
		mintempF: string
		sunHour: string
		totalSnow_cm: string
		uvIndex: string

		[key: string]: any
	}[]
}
