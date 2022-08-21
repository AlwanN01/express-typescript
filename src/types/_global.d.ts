import { Request, Response, NextFunction } from 'express'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: number
      HOST: string
      NAME: string
      PORT_DB: number
      USER: string
      PASSWORD: string
    }
  }
  interface String {
    blue(): string
    yellow(): string
    green(): string
    red(): string
  }
  type Req = Request
  type Res = Response
  type Next = NextFunction
  type RH = (req: Request, res: Response, next?: NextFunction) => void //request handler

  interface IController {
    index(req: Req, res: Res): void
    create(req: Req, res: Res): void
    show(req: Req, res: Res): void
    update(req: Req, res: Res): void
    delete(req: Req, res: Res): void
  }
}

export {}
