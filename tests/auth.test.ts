import supertest from 'supertest'
import app from '../src/app'
import { createUser, sendUser } from './factories/authFactory'

describe("SignUp", () => {
    it("Create user and return status code 201", async () =>{
        const user = await createUser()

        const result = await supertest(app).post("/sign-up").send(user)
        
        expect(result.status).toBe(201)
    })
})

describe("SignIn", () => {
    it("Login user and return status code 200", async () =>{
        const user_create = await createUser()
        const user = await sendUser(user_create)

        await supertest(app).post("/sign-up").send(user_create)

        const result = await supertest(app).get("/sign-in").send(user)

        expect(result.status).toBe(200)
    })
})