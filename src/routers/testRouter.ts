import { Router } from "express";
import {registerTest, getTest, getGroupByTeachers} from "../controllers/testController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";

const testRouter = Router();




testRouter.post("/test", registerTest);
testRouter.get("/test", getTest);
testRouter.get("/teachers", getGroupByTeachers);

export default testRouter