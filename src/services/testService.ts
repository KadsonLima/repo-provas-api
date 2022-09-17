import { TestBody } from '../repositories/testRepository';
import * as testRepository from '../repositories/testRepository'



async function registerTest(testData:TestBody) {


    return await testRepository.createTest(testData)

}

async function getTest() {


    return await testRepository.getTestsForTerms()

}

async function getGroupByTeachers() {


    return await testRepository.getTestsForTeacher()

}

export {registerTest, getTest, getGroupByTeachers}