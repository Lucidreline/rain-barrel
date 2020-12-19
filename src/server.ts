import express, { Application, Request, Response, NextFunction } from 'express'
import config from 'config'
import helmet from 'helmet'

import runFuncitons from './utils/runFunctions'

runFuncitons()

const PORT: Number = config.get('port')
const app: Application = express()

app.use(helmet())

app.get('/', (req: Request, res: Response) => {
	res.send('hi there!')
})

app.listen(PORT, () => console.log(`Server Up on Port ${PORT} 💻`))
