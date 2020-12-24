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
	date: String // this is uppercase String because Date.now.tostring() returns String not string
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
	date: String,
})

const Weather = mongoose.model<IWeather>('weather', weatherSchema)

export default Weather
