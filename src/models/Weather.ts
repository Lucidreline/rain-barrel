import mongoose from 'mongoose'

export interface IWeather extends mongoose.Document {
	zipcode: string
	temp_F: Number
	feelsLikeF: Number
	humidity: Number
	precipMM: Number
	weatherCode: Number
	windSpeedMPH: Number
	weatherDesc: string
	date?: Date
}

const weatherSchema = new mongoose.Schema({
	zipcode: String,
	temp_F: Number,
	feelsLikeF: Number,
	humidity: Number,
	precipMM: Number,
	weatherCode: Number,
	windSpeedMPH: Number,
	weatherDesc: String,
	date: { type: Date, default: Date.now },
})

const Weather = mongoose.model<IWeather>('weather', weatherSchema)

export default Weather
