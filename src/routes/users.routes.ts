import { Router } from 'express';
import UserController from '../controllers/UserController'

const userRoutes = Router()

userRoutes.get('/', UserController.index)
userRoutes.post('/', UserController.store)
userRoutes.delete('/:id', UserController.delete)
userRoutes.put('/:id', UserController.update)




export default userRoutes