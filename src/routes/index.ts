import { Router } from 'express';
import userRoutes from './users.routes'
import workerRoutes from './workers.routes';
//import { Request, Response } from 'express'
//import User, { UserAttributes, UserCreationAttributes } from './models/User';

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/workers', workerRoutes)

export default routes