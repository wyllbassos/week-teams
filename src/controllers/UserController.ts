import User, { UserAttributes, UserCreationAttributes } from '../models/User';
import { Request, Response } from 'express'

const UserController = {

    async index(request: Request, response: Response) {
        const users:UserAttributes[] = await User.findAll({
            include: ['Worker'],
        });

        return response.json( users );
    },
    
    async store(request: Request, response: Response) {
        const { userLogin, email, name, workerId }:User = request.body
        const user = { userLogin, email, name, workerId }
        try {
            const newUser = await User.create(user)
            response.json(newUser)
        } catch (error) {
            console.log(error)
            response.json({ error })
        }
    }, 

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const where = { where: { id } }
        const deleted = await User.destroy(where);
        if(deleted)
            response.status(204).json()
        else
            response.status(400).json({ error: 'User not found.' })
    },
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { userLogin, name, email, workerId }:User = request.body
        const user = await User.findByPk(id)//, { raw: true }))
        if(user !== null){
            if(userLogin && name && email){
                user.userLogin = userLogin
                user.name = name
                user.email = email
                if(user.save())
                    response.json(user)
            }
            else{
                response.status(400).json({ error: 'Incorrect parameters' })
            }
        }
        else
            response.status(400).json({ error: 'User not found.' })
    },

};

export default UserController
