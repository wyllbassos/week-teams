import { Router } from 'express';
import { Request, Response } from 'express'

import User, { UserAttributes, UserCreationAttributes } from './models/User';

require('./database');

const routes = Router()

//require('./models/teste')

routes.get('/create', async (req,res) => {
    const user = {
        firstName: "Wyll",
        lastName: "Bassos",
        email: "bassoscolorado@gmail.com"
    }
    try {
        res.send(await User.create(user))
    } catch (error) {
        console.log(error)
        res.send({error})
    }
    
    
})

routes.get('/', async (req,res) => {
    res.send(await User.findAll())
})

export default routes