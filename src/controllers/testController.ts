import { Request, Response } from "express";
import * as testService from '../services/testService'


const registerTest = async(req:Request, res:Response) =>{

    const testData:{name:string, pdfUrl:string, categoryId:number, teacherId:number, disciplineId:number} = req.body

    const result = await testService.registerTest(testData)
    res.status(201).send(result)

}

const getTest = async(req:Request, res:Response) =>{


    const result = await testService.getTest()
    res.status(200).send(result)

}

const getGroupByTeachers = async(req:Request, res:Response) =>{


    const result = await testService.getGroupByTeachers()
    res.status(200).send(result)

}



export {registerTest, getTest, getGroupByTeachers}