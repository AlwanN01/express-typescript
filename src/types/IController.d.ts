export default interface IController {
  index(req: Req, res: Res): void
  create(req: Req, res: Res): void
  show(req: Req, res: Res): void
  update(req: Req, res: Res): void
  delete(req: Req, res: Res): void
}
