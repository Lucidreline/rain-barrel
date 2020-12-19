import express, { Application, Request, Response, NextFunction } from 'express'
import config from 'config'
import helmet from 'helmet'

import connectDB from './connectDB'
import grabWeather from './grab-weather'

connectDB()

const PORT: Number = config.get('port')
const app: Application = express()

app.use(helmet())

app.get('/', (req: Request, res: Response) => {
	grabWeather()
	res.send('hi there!')
})

app.listen(PORT, () => console.log(`Server online through port ${PORT} 💻`))
