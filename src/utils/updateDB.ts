import { schedule, ScheduledTask } from 'node-cron'
import config from 'config'

import Weather from '../models/Weather'
import grabWeather from './grab-current-weather'

const freq: Number = config.get('updaterFreqMin')

const updater: ScheduledTask = schedule(
	`*/${freq} * * * *`,
	async () => {
		const weather = await grabWeather(config.get('zipcode'))
		try {
			Weather.create(weather)
		} catch (e) {
			console.log(
				'❌ Error trying to add the following entry to database:\n' + weather
			)
		}
		if (config.get('printData')) console.log(weather)
	},
	{ scheduled: false }
)

const startUpdater = () => {
	try {
		updater.start()
		console.log(`Updating Database every ${freq} Minute(s) 🔁`)
	} catch (e) {
		console.log(
			`❌Error starting database Updater: ${e.message}.\nStopping Server due to Error! 🛑`
		)
		process.exit(1)
	}
}

export default startUpdater
