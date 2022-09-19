import app from "../../src/app"
import supertest from "supertest"

const getToken = async (user:any) => {
	const response = await supertest(app).post("/sign-in").send(user)
	return response.body.token
}

export { getToken }
