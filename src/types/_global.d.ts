import { Request, Response, NextFunction } from 'express'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: string
      HOST: string
      NAME: string
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
  type RH = (req: Request, res: Response, next?: NextFunction) => void //request handler
}

export {}
