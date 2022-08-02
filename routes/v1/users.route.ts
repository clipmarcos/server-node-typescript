import { Router } from 'express'
import {
  deleteUser,
  getUser,
  getUsers,
  saveUser,
  updateUser,
} from '../../controllers/users.controllers'

const router = Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.put('/:id', updateUser)

router.post('/', saveUser)

router.delete('/:id', deleteUser)

export default router
