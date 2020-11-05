import Worker, { WorkerAttributes } from '../models/Worker';
import { Request, Response } from 'express'

const WorkerController = {

    async index(request: Request, response: Response) {
        const workers:WorkerAttributes[] = await Worker.findAll({
            include: {all: true}
        });
        
        return response.json(workers);
    },

    async store(request: Request, response: Response) {
        const { register, name } = request.body
        const worker = { register, name }
        try {
            response.json(await Worker.create(worker))
        } catch (error) {
            console.log(error)
            response.json({ error })
        }
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const where = { where: { id } }
        const deleted = await Worker.destroy(where);
        if(deleted)
            response.status(204).json()
        else
            response.status(400).json({ error: 'Worker not found.' })
    },
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name } = request.body
        const worker = await Worker.findByPk(id)//, { raw: true }))
        if(worker !== null){
            if(name){
                worker.name = name
                if(worker.save())
                    response.json(worker)
            }
            else{
                response.status(400).json({ error: 'Incorrect parameters' })
            }
        }
        else
            response.status(400).json({ error: 'Worker not found.' })
    },

};

export default WorkerController