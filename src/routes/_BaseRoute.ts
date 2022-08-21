import Router from 'express-promise-router'

abstract class BaseRoute {
  public router
  constructor() {
    this.router = Router()
    this.routes()
  }
  protected abstract routes(): void
}
export default BaseRoute
