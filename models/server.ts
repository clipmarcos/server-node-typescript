import express, { Application } from 'express'
import usersRouter from '../routes/v1/users.route'
import dbConnection from '../database/conf'
import cors from 'cors'

class Server {
  private app: Application
  private port: string | number

  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8000

    // connect to database
    this.connectDB()

    // middlewares
    this.middlewares()

    // routes my app
    this.routes()
  }

  async connectDB() {
    await dbConnection()
  }

  middlewares() {
    // cors
    this.app.use(cors())

    // body parser
    this.app.use(express.json())

    // folder public
    this.app.use(express.static('public'))
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`🟢 Server running on port ${this.port} 🟢`)
    })
  }

  routes() {
    this.app.use('/api/v1/users', usersRouter)
  }
}

export default Server
