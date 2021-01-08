import { Router, Request, Response, json } from 'express'
import config from 'config'
import Weather from '../models/Weather'
import grabWeather from '../utils/grab-current-weather'
import grabTodaysMaxMins from '../utils/grab-todays-max-mins'

const router = Router()
const minuteFrequency: number = config.get('updaterFreqMin')

// @route   Get api/current
// @desc    Return current weather for zipcode in config
// @access  Public
router.get('/current', async (req: Request, res: Response) => {
	try {
		res.json(await grabWeather(config.get('zipcode')))
	} catch (e) {
		console.log('❌ Error Sending Current Weather Data: ' + e.message)
	}
})

// @route   Get api/current/:zipcode
// @desc    Return current weather using given zipcode
// @access  Public
router.get('/current/:zipcode', async (req: Request, res: Response) => {
	try {
		res.json(await grabWeather(req.params.zipcode))
	} catch (e) {
		console.log('❌ Error Sending Current Weather Data: ' + e.message)
	}
})

// @route   Get api/maxmins
// @desc    Return the max and mins of todays forcast for the zipcode in config
// @access  Public
router.get('/maxmins', async (req: Request, res: Response) => {
	try {
		res.json(await grabTodaysMaxMins(config.get('zipcode')))
	} catch (e) {
		console.log('❌ Error Sending Todays Max and Mins: ' + e.message)
	}
})

// @route   Get api/maxMins/:zipcode
// @desc    Return current weather using given zipcode
// @access  Public
router.get('/maxmins/:zipcode', async (req: Request, res: Response) => {
	try {
		res.json(await grabTodaysMaxMins(req.params.zipcode))
	} catch (e) {
		console.log('❌ Error Sending Todays Max and Mins: ' + e.message)
	}
})

// @route   Get api/
// @desc    Return all Weather entries in database
// @access  Public
router.get('/', async (req: Request, res: Response) => {
	try {
		res.json(await Weather.find({}))
	} catch (e) {
		console.log('❌ Error Sending all Weather Data from Database: ' + e.message)
	}
})

// @route   Get api/latest/:days
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
