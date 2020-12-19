import mongoose from 'mongoose'
import config from 'config'

const uri: string = config.get('mongoUri')

const connectDB = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('Connected to DB 📂')
	} catch (e) {
		console.log(`Error connecting to MongoDB: ${e.message}. Stopping Server 🛑`)
	}
}

export default connectDB
