import express, { Application } from 'express'
import usersRouter from '../routes/v1/users.route'

class Server {
  private app: Application
  private port: string | number

  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8000

    // routes my app
    this.routes()
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
