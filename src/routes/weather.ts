import { Router, Request, Response, json } from 'express'
import config from 'config'
import Weather from '../models/Weather'
import grabWeather from '../utils/grab-weather'

const router = Router()
const minuteFrequency: number = config.get('updaterFreqMin')

// @route   Get weather/current
// @desc    Return current weather
// @access  Public
router.get('/current', async (req: Request, res: Response) => {
	try {
		res.json(await grabWeather())
	} catch (e) {
		console.log('❌ Error Sending Current Weather Data: ' + e.message)
	}
})

// @route   Get weather/
// @desc    Return all Weather entries in database
// @access  Public
router.get('/', async (req: Request, res: Response) => {
	try {
		res.json(await Weather.find({}))
	} catch (e) {
		console.log('❌ Error Sending all Weather Data from Database: ' + e.message)
	}
})

// @route   Get weather/latest/:days
// @desc    Return weather from database of x latest days
// @access  Public
router.get('/latest/:days', async (req: Request, res: Response) => {
	try {
		res.json(
			await Weather.find()
				.sort({ _id: 1 })
				.limit(parseInt(req.params.days) * ((60 * 24) / minuteFrequency))
		)
	} catch (e) {
		console.log('❌ Error Sending Latest x Entries from database: ' + e.message)
	}
})

export { router }
