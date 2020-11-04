import { Router } from 'express';
import WorkerController from '../controllers/WorkerController'

const workerRoutes = Router()

workerRoutes.get('/', WorkerController.index)
workerRoutes.post('/', WorkerController.store)
workerRoutes.delete('/:id', WorkerController.delete)
workerRoutes.put('/:id', WorkerController.update)


export default workerRoutes