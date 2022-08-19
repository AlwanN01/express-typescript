import express, { Application, Request, Response, NextFunction } from 'express'
import Route from 'routes'
import 'utils/prototype'
import 'express-async-errors'
class App {
  public app: Application
  constructor() {
    this.app = express()
    this.plugins()
    this.routes()
  }

  protected plugins(): void {
    this.app.use(require('cors')({ credentials: true, origin: 'http://localhost:3001' }))
    this.app.use(require('morgan')('dev'))
    this.app.use(require('compression')())
    this.app.use(require('helmet')({ contentSecurityPolicy: false }))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  protected routes(): void {
    this.app.get('/', (req: Request, res: Response): Response => res.send('Hello World'))
    this.app.use('/api/v1', Route)
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
      res.status(500).json(err.message)
      next(err)
    })
  }
}

export default new App().app
