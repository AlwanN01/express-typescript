import userData from 'db/userData'
import { UserData } from 'types/data'

class UserControl implements IController {
  index(req: Req, res: Res): void {
    res.send(userData)
  }
  create(req: Req, res: Res): void {
    const { id, name } = <UserData>req.body
    userData.push({ id, name })
    res.send('create suksees')
  }
  show(req: Req, res: Res): void {
    const { id } = req.params as { id: string }
    const user = userData.find(user => user.id === Number(id))
    if (!user) res.status(404).send('User not found')
    res.send(user)
  }
  update(req: Req, res: Res): any {
    const { id } = req.params as { id: string }
    const { name } = req.body as { name: string }
    const user: UserData | undefined = userData.find(user => user.id === Number(id))
    if (!user) return res.status(404).send('User not found')
    user.name = name
    return res.send('update suksees')
  }
  delete(req: Req, res: Res): Res {
    const { id } = req.params as { id: string }
    const user: UserData | undefined = userData.find(user => user.id === Number(id))
    if (!user) return res.status(404).send('User not found')
    userData.splice(userData.indexOf(user), 1)
    return res.send('delete suksees')
  }
}

export default new UserControl()
