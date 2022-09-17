import { Router } from "express";
import { signIn, signUp } from "../controllers/authController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";
import signInSchema from "../schemas/authSchemas/signInSchema";
import signUpSchema from "../schemas/authSchemas/signUpSchema"

const authRouter = Router();


authRouter.post("/sign-up",schemaValidateMiddleware(signUpSchema), signUp);
authRouter.get("/sign-in",schemaValidateMiddleware(signInSchema), signIn);

export default authRouter