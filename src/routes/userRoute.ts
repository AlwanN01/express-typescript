import BaseRoute from './_BaseRoute'
import userControl from 'controllers/userControl'

class UserRoute extends BaseRoute {
  protected routes(): void {
    this.router.get('/', userControl.index)
    this.router.post('/', userControl.create)
    this.router.get('/:id', userControl.show)
    this.router.put('/:id', userControl.update)
    this.router.delete('/:id', userControl.delete)
  }
}

export default new UserRoute().router
