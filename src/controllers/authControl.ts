class AuthControl implements IController {
  index(req: Req, res: Res): void {
    res.send('index')
  }
  create(req: Req, res: Res): void {
    res.send('create')
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
export default new AuthControl()
