import express, { Application, Request, Response, NextFunction } from 'express'
import config from 'config'

const PORT: Number = config.get('port')
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('hi there')
})

app.listen(PORT, () => console.log(`Server online through port ${PORT}`))
