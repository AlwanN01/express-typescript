const authMiddleware = (req: Req, res: Res, next: Next): void => {
  if (!req.headers.authorization)
    res.status(401).json({
      message: 'Unauthorized'
    })
  else next()
}
export default authMiddleware
