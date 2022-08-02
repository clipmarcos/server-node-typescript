import { Request, Response } from 'express'

export const getUsers = (req: Request, res: Response) => {
  res.json({
    msg: 'GET api Controlador List TypeScript',
  })
}

export const getUser = (req: Request, res: Response) => {
  const id = req.params.id
  res.json({
    msg: 'GET api Controlador List TypeScript',
    id: id,
  })
}

export const updateUser = (req: Request, res: Response) => {
  const id = req.params.id
  res.json({
    msg: 'PUT api Controlador Update TypeScript',
    id: id,
  })
}

export const deleteUser = (req: Request, res: Response) => {
  const id = req.params.id
  res.json({
    msg: 'DELETE api Controlador Delete TypeScript',
  })
}

export const saveUser = (req: Request, res: Response) => {
  const body = req.body
  res.json({
    msg: 'POST api Controlador Save TypeScript',
    body: body,
  })
}
