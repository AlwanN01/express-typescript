import IController from 'types/IController'

class UserController implements IController {
  index(req: Req, res: Res) {
    res.send(`endpoint of users `)
  }
  create(req: Req, res: Res): void {
    res.send(req.body)
  }
  show(req: Req, res: Res): void {
    throw new Error('Method not implemented.')
  }
  update(req: Req, res: Res): void {
    throw new Error('Method not implemented.')
  }
  delete(req: Req, res: Res): void {
    throw new Error('Method not implemented.')
  }
}

export default new UserController()
