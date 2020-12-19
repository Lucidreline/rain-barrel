import connectDB from './connectDB'
import startUpdater from './updateDB'

const runFuncitons = async () => {
	console.log(signiture)
	await connectDB()
	startUpdater()

	console.log('- - - - - - - - - - - - - - - - - - - - -\n')
}

export default runFuncitons

const signiture =
	' __            _   _         _ _         \n' +
	'|  |   _ _ ___|_|_| |___ ___| |_|___ ___ \n' +
	'|  |__| | |  _| | . |  _| -_| | |   | -_|\n' +
	'|_____|___|___|_|___|_| |___|_|_|_|_|___|\n'
