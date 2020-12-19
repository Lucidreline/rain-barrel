import { schedule, ScheduledTask } from 'node-cron'
import config from 'config'

const freq: Number = config.get('updaterFreq')

const updater: ScheduledTask = schedule(
	`*/${freq} * * * *`,
	() => {
		console.log('This is a repeated message 📬')
	},
	{ scheduled: false }
)

const startUpdater = () => {
	try {
		updater.start()
		console.log(`Updater Running every ${freq} Minute(s) 🔁`)
	} catch (e) {
		console.log(
			`Error starting database Updater: ${e.message}. Stopping Server 🛑`
		)
		process.exit(1)
	}
}

export default startUpdater
