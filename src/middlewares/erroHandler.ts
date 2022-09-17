import {Request, Response, NextFunction} from 'express';

export default async function errorHandler(error:any, req:Request, res:Response, _:NextFunction) {
    
    if(error.code=== 'P2002'){
        return res.status(409).send("a new user cannot be created with this email")
    }

    if(error.code){
        return res.status(error.code).send(error.message);
    }

    res.sendStatus(500);
}