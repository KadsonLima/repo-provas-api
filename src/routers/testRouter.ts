import { Router } from "express";
import {registerTest, getTestsCategories, getGroupedTests} from "../controllers/testController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";
import { validateJWT } from "../middlewares/validateJwtMiddleware";
import testSchema from "../schemas/testSchema";

const testRouter = Router();



testRouter.use(validateJWT())
testRouter.post("/tests", schemaValidateMiddleware(testSchema), registerTest)
testRouter.get("/categories", getTestsCategories)
testRouter.get("/tests", getGroupedTests)

export default testRouter