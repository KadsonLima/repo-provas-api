import { Request, Response } from "express";
import * as authService from '../services/authService'


const signUp = async(req:Request, res:Response) =>{

    const {name, email, password} = req.body

    const result = await authService.signUp({name, email, password})

    res.status(201).send(result)

}

const signIn = async(req:Request, res:Response) =>{

    const {email, password} = req.body

    const result = await authService.signIn({email, password})

    res.status(200).send(result)

}

export {signUp, signIn}