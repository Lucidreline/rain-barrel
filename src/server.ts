import express, { Application, Request, Response, NextFunction } from 'express'
import config from 'config'
import helmet from 'helmet'

// routes
import { router as weatherRouter } from './routes/weather'

// utils
import runFuncitons from './utils/runFunctions'

const PORT: Number = config.get('port')
const app: Application = express()

runFuncitons()

app.use(helmet())

app.use('/api', weatherRouter)

app.get('/', (req: Request, res: Response) => {
	res.send('Hi there! You can grab the current weather with /api')
})

app.listen(PORT, () => console.log(`Server Up on Port ${PORT} 💻`))
