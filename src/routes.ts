import { Router } from 'express';
import UserController from './controllers/UserController'
//import { Request, Response } from 'express'
//import User, { UserAttributes, UserCreationAttributes } from './models/User';
require('./database')


const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.delete('/users/:id', UserController.delete)
routes.put('/users/:id', UserController.update)


export default routes