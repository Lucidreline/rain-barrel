import fetch from 'node-fetch'
import config from 'config'

// for now we will just be using wttr.in for maxMins
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

interface IMaxMins {
	feelsLikeTempF: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	tempF: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	uvIndex: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	humidity: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	pressure: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	visibility: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	cloudcover: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}

	// chances
	chanceOfFog: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	chanceOfFrost: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	chanceOfHightemp: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	chanceOfOvercast: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	chanceOfRain: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	chanceOfSnow: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	chanceOfSunshine: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	chanceOfThunder: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	windSpeedMiles: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}
	precipMm: {
		max: {
			value: number
			time: number
		}
		min: {
			value: number
			time: number
		}
	}

	// no max or mins
	totalSnowCm: number
}

const grabTodaysMaxMins = async (zipcode: string) => {
	const wttrRes = await fetch(`http://wttr.in/${zipcode}?format=j1`)
	const wttrResJson: IWttrResponce = await wttrRes.json()

	let maxMins: IMaxMins = {
		feelsLikeTempF: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		tempF: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		uvIndex: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		humidity: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		pressure: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		visibility: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		cloudcover: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},

		// chances
		chanceOfFog: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		chanceOfFrost: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		chanceOfHightemp: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		chanceOfOvercast: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		chanceOfRain: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		chanceOfSnow: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		chanceOfSunshine: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		chanceOfThunder: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		windSpeedMiles: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},
		precipMm: {
			max: {
				value: -1000,
				time: 0,
			},
			min: {
				value: 1000,
				time: 0,
			},
		},

		// no max or mins
		totalSnowCm: parseFloat(wttrResJson.weather[0].totalSnow_cm),
	}

	wttrResJson.weather[0].hourly.forEach((hourForcast) => {
		const hourForcastTime = parseInt(hourForcast.time)

		if (parseInt(hourForcast.FeelsLikeF) > maxMins.feelsLikeTempF.max.value) {
			maxMins.feelsLikeTempF.max.value = parseInt(hourForcast.FeelsLikeF)
			maxMins.feelsLikeTempF.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.FeelsLikeF) < maxMins.feelsLikeTempF.min.value) {
			maxMins.feelsLikeTempF.min.value = parseInt(hourForcast.FeelsLikeF)
			maxMins.feelsLikeTempF.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.tempF) > maxMins.tempF.max.value) {
			maxMins.tempF.max.value = parseInt(hourForcast.tempF)
			maxMins.tempF.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.tempF) < maxMins.tempF.min.value) {
			maxMins.tempF.min.value = parseInt(hourForcast.FeelsLikeF)
			maxMins.tempF.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.uvIndex) > maxMins.uvIndex.max.value) {
			maxMins.uvIndex.max.value = parseInt(hourForcast.uvIndex)
			maxMins.uvIndex.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.uvIndex) < maxMins.uvIndex.min.value) {
			maxMins.uvIndex.min.value = parseInt(hourForcast.uvIndex)
			maxMins.uvIndex.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.humidity) > maxMins.humidity.max.value) {
			maxMins.humidity.max.value = parseInt(hourForcast.humidity)
			maxMins.humidity.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.humidity) < maxMins.humidity.min.value) {
			maxMins.humidity.min.value = parseInt(hourForcast.humidity)
			maxMins.humidity.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.pressure) > maxMins.pressure.max.value) {
			maxMins.pressure.max.value = parseInt(hourForcast.pressure)
			maxMins.pressure.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.pressure) < maxMins.pressure.min.value) {
			maxMins.pressure.min.value = parseInt(hourForcast.pressure)
			maxMins.pressure.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.visibility) > maxMins.visibility.max.value) {
			maxMins.visibility.max.value = parseInt(hourForcast.visibility)
			maxMins.visibility.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.visibility) < maxMins.visibility.min.value) {
			maxMins.visibility.min.value = parseInt(hourForcast.visibility)
			maxMins.visibility.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.cloudcover) > maxMins.cloudcover.max.value) {
			maxMins.cloudcover.max.value = parseInt(hourForcast.cloudcover)
			maxMins.cloudcover.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.cloudcover) < maxMins.cloudcover.min.value) {
			maxMins.cloudcover.min.value = parseInt(hourForcast.cloudcover)
			maxMins.cloudcover.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.chanceoffog) > maxMins.chanceOfFog.max.value) {
			maxMins.chanceOfFog.max.value = parseInt(hourForcast.chanceoffog)
			maxMins.chanceOfFog.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.chanceoffog) < maxMins.chanceOfFog.min.value) {
			maxMins.chanceOfFog.min.value = parseInt(hourForcast.chanceoffog)
			maxMins.chanceOfFog.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.chanceoffrost) > maxMins.chanceOfFrost.max.value) {
			maxMins.chanceOfFrost.max.value = parseInt(hourForcast.chanceoffrost)
			maxMins.chanceOfFrost.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.chanceoffrost) < maxMins.chanceOfFrost.min.value) {
			maxMins.chanceOfFrost.min.value = parseInt(hourForcast.chanceoffrost)
			maxMins.chanceOfFrost.min.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofhightemp) >
			maxMins.chanceOfHightemp.max.value
		) {
			maxMins.chanceOfHightemp.max.value = parseInt(
				hourForcast.chanceofhightemp
			)
			maxMins.chanceOfHightemp.max.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofhightemp) <
			maxMins.chanceOfHightemp.min.value
		) {
			maxMins.chanceOfHightemp.min.value = parseInt(
				hourForcast.chanceofhightemp
			)
			maxMins.chanceOfHightemp.min.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofovercast) >
			maxMins.chanceOfOvercast.max.value
		) {
			maxMins.chanceOfOvercast.max.value = parseInt(
				hourForcast.chanceofovercast
			)
			maxMins.chanceOfOvercast.max.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofovercast) <
			maxMins.chanceOfOvercast.min.value
		) {
			maxMins.chanceOfOvercast.min.value = parseInt(
				hourForcast.chanceofovercast
			)
			maxMins.chanceOfOvercast.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.chanceofrain) > maxMins.chanceOfRain.max.value) {
			maxMins.chanceOfRain.max.value = parseInt(hourForcast.chanceofrain)
			maxMins.chanceOfRain.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.chanceofrain) < maxMins.chanceOfRain.min.value) {
			maxMins.chanceOfRain.min.value = parseInt(hourForcast.chanceofrain)
			maxMins.chanceOfRain.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.chanceofsnow) > maxMins.chanceOfSnow.max.value) {
			maxMins.chanceOfSnow.max.value = parseInt(hourForcast.chanceofsnow)
			maxMins.chanceOfSnow.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.chanceofsnow) < maxMins.chanceOfSnow.min.value) {
			maxMins.chanceOfSnow.min.value = parseInt(hourForcast.chanceofsnow)
			maxMins.chanceOfSnow.min.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofsunshine) >
			maxMins.chanceOfSunshine.max.value
		) {
			maxMins.chanceOfSunshine.max.value = parseInt(
				hourForcast.chanceofsunshine
			)
			maxMins.chanceOfSunshine.max.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofsunshine) <
			maxMins.chanceOfSunshine.min.value
		) {
			maxMins.chanceOfSunshine.min.value = parseInt(
				hourForcast.chanceofsunshine
			)
			maxMins.chanceOfSunshine.min.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofsunshine) >
			maxMins.chanceOfSunshine.max.value
		) {
			maxMins.chanceOfSunshine.max.value = parseInt(
				hourForcast.chanceofsunshine
			)
			maxMins.chanceOfSunshine.max.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofsunshine) <
			maxMins.chanceOfSunshine.min.value
		) {
			maxMins.chanceOfSunshine.min.value = parseInt(
				hourForcast.chanceofsunshine
			)
			maxMins.chanceOfSunshine.min.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofthunder) > maxMins.chanceOfThunder.max.value
		) {
			maxMins.chanceOfThunder.max.value = parseInt(hourForcast.chanceofthunder)
			maxMins.chanceOfThunder.max.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.chanceofthunder) < maxMins.chanceOfThunder.min.value
		) {
			maxMins.chanceOfThunder.min.value = parseInt(hourForcast.chanceofthunder)
			maxMins.chanceOfThunder.min.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.windspeedMiles) > maxMins.windSpeedMiles.max.value
		) {
			maxMins.windSpeedMiles.max.value = parseInt(hourForcast.windspeedMiles)
			maxMins.windSpeedMiles.max.time = hourForcastTime
		}

		if (
			parseInt(hourForcast.windspeedMiles) < maxMins.windSpeedMiles.min.value
		) {
			maxMins.windSpeedMiles.min.value = parseInt(hourForcast.windspeedMiles)
			maxMins.windSpeedMiles.min.time = hourForcastTime
		}

		if (parseInt(hourForcast.precipMM) > maxMins.precipMm.max.value) {
			maxMins.precipMm.max.value = parseInt(hourForcast.precipMM)
			maxMins.precipMm.max.time = hourForcastTime
		}

		if (parseInt(hourForcast.precipMM) < maxMins.precipMm.min.value) {
			maxMins.precipMm.min.value = parseInt(hourForcast.precipMM)
			maxMins.precipMm.min.time = hourForcastTime
		}
	})

	return maxMins
}

export default grabTodaysMaxMins
